import { Link } from "react-router-dom";

interface BlogCardDetails{
    authorName : string;
    title : string;
    content : string;
    publishedDate : string;
    id : number;
}

export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate
} : BlogCardDetails)=>{

    return <div>
        <Link to={`/blog/${id}`}>
        <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
        <div className="flex">
            <Avatar name={authorName}/>

            <div className="font-light pl-2 text-sm flex justify-center flex-col">
                {authorName}
            </div>
            <div className="flex justify-center flex-col pl-2 ">
                <Cirlce/>
            </div>
            <div className="text-slate-400 font-thin pl-2 text-sm flex justify-center flex-col">
                {publishedDate}
            </div>
                
 
        </div>
        
        <div className="text-xl font-bold pt-2">
            {title}
        </div>

        <div className="text-md font-thin text-neutral-600	">
            {content.slice(0,150) + "..." }
            <button className="text-blue-400 font-medium text-sm">Readmore</button> 
        </div>

        <div className="text-sm text-neutral-600 font-thin pt-4">
            {`${Math.ceil(content.length/100)} min read `}
        </div>

        {/* <div className="bg-slate-200 h-1 w-full">

        </div>
         */}
         </div>
        </Link>
        
    </div>
}

export function Avatar({ name, size = "small" }: { name: string, size?: "small" | "big" }) {
    return <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-600 rounded-full ${size === "small" ? "w-6 h-6" : "w-10 h-10"}`}>
    <span className={`${size === "small" ? "text-xs" : "text-md"} font-extralight text-gray-600 dark:text-gray-300`}>
        {name[0]}
    </span>
</div>
}

export function Cirlce(){
    return <div className="h-1 w-1 rounded-full bg-slate-500"> 
           
    </div>
}
