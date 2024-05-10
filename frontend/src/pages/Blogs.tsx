import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { BlogSkeleton } from "../components/Blogskeleton";
import { useBlogs } from "../hooks";

export const Blogs = () => {
    const {Loading, Blogs} = useBlogs();
    // Add skeleton
    if(Loading){
        return <div>
            <Appbar/>
            <BlogSkeleton/>
        </div>
    }
    return <div>
        <Appbar/>
        <div className="flex justify-center">
        <div className=" max-w-xl">
            {Blogs.map(blog => <BlogCard
        authorName = {blog.author.name || "Anonymus"} 
        title = {blog.title}
        content = {blog.content}  
        publishedDate = {"9 May 2024"} 
        />
        )}
        
        
       
    </div>
    </div>
    </div>
}
// return <div>
//         <Appbar />
//         <div  className="flex justify-center">
//             <div>
//                 {blogs.map(blog => <BlogCard
//                     key={blog.id}
//                     id={blog.id}
//                     // authorName={blog.author.name || "Anonymous"}
//                     authorName={blog.autherName || "Anonymous"}
//                     title={blog.title}
//                     content={blog.content}
//                     publishedDate={"2nd Feb 2024"}
//                 />)}
//             </div>
//         </div>
//     </div>