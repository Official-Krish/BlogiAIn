import { useContext } from "react";
import BlogCard from "../BlogCard";
import { UserProfileContext } from "./UserProfile";
import { BlogSkeleton } from "../Blogskeleton";

export interface BlogType {
    id: string;
    title: string;
    content: string;
    publishedDate: string;
    author: {
      id: string;
      name: string;
      details?: string;
    };
    claps: [];
    bookmarkId?: string;
  }
const UserHomeTab = () => {
  const { blogs, loadingUserBlogs } = useContext(UserProfileContext);

  return (
    <div>
      {loadingUserBlogs ? (
        <BlogSkeleton />
      ) : (
        <div className="flex flex-col">
          {blogs && blogs.length > 0 &&
            blogs.map((blog: BlogType) => (
              <BlogCard
                id={blog?.id}
                authorName={blog?.author.name}
                publishedDate={blog?.publishedDate}
                title={blog.title}
                content={blog.content}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default UserHomeTab;
