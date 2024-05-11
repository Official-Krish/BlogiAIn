import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";
import { Appbar } from "../components/Appbar";
import { Spinner } from "../components/spinner";
import { FullBlog } from "../components/fullBlog";

export const Blog = () => {
  const { id } = useParams();
  const {loading, blog} = useBlog({
      id: id || ""
  });

  if (loading || !blog) {
      return <div>
          <Appbar />
          <div className="h-screen flex flex-col justify-center">
              
              <div className="flex justify-center">
                  <Spinner />
              </div>
          </div>
      </div>
        
  }
  return <div>
      <FullBlog blog={blog} />
  </div>
}