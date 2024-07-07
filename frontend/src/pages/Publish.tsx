

import axios from 'axios';
import Appbar from '../components/Appbar';
import { backend_url, FF_ENABLE_AI } from '../config';
import { useState, useRef } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.bubble.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ToastWrapper from '../components/ToastWrapper';
import AutogrowTextarea from '../components/AutogrowTextarea';
import { useAI } from '../hooks/blog';
import GenerateAIBtn from '../components/GenerateAIBtn';
import { htmlTagRegex } from '../utils/string';
import useAutoSaveDraft from '../hooks/useAutoSaveDraft';
import { videoHandler, modules } from '../utils/videoHandler';
import { useNavigate } from 'react-router-dom';

// Register the custom video handler with Quill toolbar
Quill.register('modules/customToolbar', function (quill: any) {
  quill.getModule('toolbar').addHandler('video', videoHandler.bind(quill));
});

const Publish = () => {
  const navigate = useNavigate();
  const { draft, } = useAutoSaveDraft('new_article', () => ({ title, content }));

  const { generateBlog } = useAI();
  const [title, setTitle] = useState(draft?.title || '');
  const [content, setContent] = useState(draft?.content || '');

  
  const writingPadRef = useRef<ReactQuill>(null);
  
  async function publishArticle() {
    
      try {
        await axios.post(
          `${backend_url}/api/v1/blog`,
          {
            title,
            content,
          },
          {
            headers: {
              Authorization: `${localStorage.getItem('token')}`,
            },
          }
        );
        navigate("/blog/:id");
    } catch (error) {
      toast.error('Failed to publish the article. Please try again.');
    }
  }

  async function generateArticle() {
    const generation = await generateBlog(title);
    setContent(generation.article);
  }

  const handleTitleKeyUp = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') writingPadRef.current?.focus();
  };

  return (
    <>
      <Appbar
        hideWriteAction
        pageActions={
          <div className="ml-2 flex gap-4">
            {FF_ENABLE_AI && title.trim().length > 10 && <GenerateAIBtn onClickHandler={generateArticle} />}
            <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-4 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={publishArticle}>Publish post</button>
          </div>
        }
      />
      <div className="flex flex-col gap-4 justify-center p-4 md:p-10 max-w-3xl m-auto">
        <div className="w-full">
          <AutogrowTextarea
            id="title"
            rows={1}
            className="resize-none font-noto-serif placeholder:text-gray-400 text-3xl tracking-wide placeholder:font-light text-black outline-none block w-full py-4"
            placeholder="Title"
            required
            autoFocus
            value={title}
            onChange={(e) => setTitle((e.target as HTMLTextAreaElement).value)}
            onKeyUp={handleTitleKeyUp}
          ></AutogrowTextarea>
        </div>
        <ReactQuill
          ref={writingPadRef}
          theme="bubble"
          placeholder="Tell your story..."
          className="tracking-wide text-[#0B1215] font-light"
          value={content}
          onChange={(value) => setContent(htmlTagRegex.test(value) ? '' : value)}
          modules={modules}
        ></ReactQuill>
      </div>
      <ToastWrapper />
    </>
  );
};

export default Publish;
