

export function Cirlce(){
    return <div className="h-1 w-1 rounded-full bg-slate-500"> 
           
    </div>
}



import { MouseEventHandler } from "react";
import ReactQuill from "react-quill";
import { Link } from "react-router-dom";
import "react-quill/dist/quill.bubble.css";
import { getPlainTextFromHTML } from "../utils/string";

interface BlogCardDetails{
    authorName : string;
    title : string;
    content : string;
    publishedDate : string;
    id : any;
}


export const BlogCard = ({ authorName, title, content, publishedDate, id }: BlogCardDetails) => {
	// split and slice combination is added so that the string doesn't get trimmed in middle of a word
	const quillContent = getPlainTextFromHTML(content).split(" ").slice(0, 100).join(" ") + "...";

	return (
		<Link
			to={`/blog/${id}`}
			className="blog-card px-4 py-8 w-full md:w-3/6  my-2 rounded-lg shadow-sm grid grid-cols-12 bg-blue"
		>
			<div className="col-span-12 md:col-span-9 md:px-4 bg-blue">
				<div className="flex items-center gap-4">
					<Avatar name={authorName || "Anonymous"} />
					<div>
						<span className="font-extralight text-slate-100">{authorName}</span> ·{" "}
						<span className="font-thin text-slate-500"> {publishedDate}</span>
					</div>
				</div>
				<div className="text-xl font-bold pt-4 text-gray-300">{title}</div>
				<div className="tracking-wide py-4 text-slate-300">
					<ReactQuill value={quillContent} readOnly={true} theme={"bubble"} />
				</div>
				<div className="text-slate-500">{Math.ceil(content.length / 300)} min read</div>
			</div>
			<div className="hidden col-span-0 md:col-span-3 p-4 md:flex justify-center items-center">
				<ArticleImage uniqueId={id} />
			</div>
		</Link>
	);
};

export default BlogCard;

export function Avatar ({
	name,
	onClick,
}: {
	name: any;
	onClick?: MouseEventHandler<HTMLDivElement>;
}) {
	return (
        
		<div 
			onClick={onClick}
			className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-200 hover:bg-gray-50 rounded-full cursor-pointer"
		>
			<span className="font-medium text-gray-600">
			{name ? (name.split(" ")[0]?.[0] ?? '') : ''}
			{name && name.split(" ").length > 1 ? (name.split(" ")[1]?.[0] ?? '') : ''}
			</span>
		</div>
	);
}

function ArticleImage({ uniqueId }: { uniqueId: string }) {
	return (
		<object data={`https://picsum.photos/300/300?random=${uniqueId}`} type="image/jpeg" className="w-full">
			<div className="bg-gray-50 w-[100%] animate-pulse aspect-square"></div>
	  	</object>
	);
}

