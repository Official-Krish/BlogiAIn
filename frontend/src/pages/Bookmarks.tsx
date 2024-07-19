import Appbar from "../components/Appbar";
import Spinner from "../components/Spinner";
import { useBookmarks } from "../hooks/index";
import BookmarkTab from "../components/Bookmarktab";
import { Footer } from "../components/Footer";

const Bookmarks = () => {
  const { bookmarks, loading } = useBookmarks();
  return (
    <>
      <Appbar />
      {loading ? (
        <div className="w-screen h-screen flex justify-center items-center bg-blue text-white">
          <Spinner />
        </div>
      ) : (
        <div className="bg-blue h-full">
          <BookmarkTab bookmarks={bookmarks}/>
          <Footer/>
        </div>
        
      )}
    </>
  );
};

export default Bookmarks;
