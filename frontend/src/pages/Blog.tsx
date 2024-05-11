import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";
import { Appbar } from "../components/Appbar";
import { FullBlog } from "../components/fullBlog";
import { BlogSkeleton } from "../components/Blogskeleton";

export const Blog = () => {
  const { id } = useParams();
  const {loading, blog} = useBlog({
      id: id || ""
  });

  if (loading) {
      return <div>
          <Appbar />
          <BlogSkeleton/>
          </div>
  }
  return <div>
      <FullBlog blog={blog} />
  </div>
}