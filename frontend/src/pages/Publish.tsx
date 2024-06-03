
// import axios from "axios";
// import Appbar from "../components/Appbar";
// import { backend_url } from "../config";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import ToastWrapper from "../components/ToastWrapper";
// import Spinner from "../components/Spinner";
// export const Publish = () => {
//   const navigate = useNavigate();
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {}, [content]);

//   async function publishArticle() {
//     if (title.trim() && content.trim()) {
//       try {
//         setLoading(true);
//         const response = await axios.post(
//           `${backend_url}/api/v1/blog`,
//           {
//             title,
//             content,
//           },
//           {
//             headers: {
//               Authorization: ` ${localStorage.getItem("token")}`,
//             },
//           }
//         );
//         navigate(`/blog/${response?.data?.id}`);
//       } catch (error) {
//         toast.error("Failed to publish the article. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     } else {
//       toast.error("Post title & content cannot be empty.");
//     }
//   }

//   return (
//     <>
//       <Appbar />
//       <div className="flex flex-col gap-8 justify-center p-4 md:p-10">
//         <div className="w-full">
//           <input
//             type="text"
//             id="title"
//             className="bg-gray-50 text-gray-900 text-lg focus:ring-gray-200 focus:border-gray-200 active:border-gray-200 outline-none block w-full p-4"
//             placeholder="Title"
//             required
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           />
//         </div>
//         <ReactQuill theme="snow" value={content} onChange={setContent}></ReactQuill>
//         <button
//           type="submit"
//           onClick={publishArticle}
//           className={`w-[150px] items-center px-5 py-2.5 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800 ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-700'}`}
//           disabled={loading}
//         >
//          {loading ? <Spinner /> : "Publish post"}
//         </button>
//       </div>
//       <ToastWrapper />
//     </>
//   );
// };

// export default Publish;


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
import PublishTags from '../components/PublishTags';
import { htmlTagRegex } from '../utils/string';
import useAutoSaveDraft from '../hooks/useAutoSaveDraft';
import { videoHandler, modules } from '../utils/videoHandler';

// Register the custom video handler with Quill toolbar
Quill.register('modules/customToolbar', function (quill: any) {
  quill.getModule('toolbar').addHandler('video', videoHandler.bind(quill));
});

const Publish = () => {
  const { draft, deleteDraft } = useAutoSaveDraft('new_article', () => ({ title, content }));

  const { generateBlog } = useAI();
  const [title, setTitle] = useState(draft?.title || '');
  const [content, setContent] = useState(draft?.content || '');
  const [blogId, setBlogId] = useState('');

  const writingPadRef = useRef<ReactQuill>(null);

  async function publishArticle() {
    if (title.trim() && content.trim()) {
      try {
        const response = await axios.post(
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
        // Clear drafts when saved on server
        deleteDraft();
        setBlogId(response?.data?.id);
      } catch (error) {
        toast.error('Failed to publish the article. Please try again.');
      }
    } else {
      toast.error('Post title & content cannot be empty.');
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
            <PublishTags onClick={publishArticle} blogId={blogId} title={title} content={content} />
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
