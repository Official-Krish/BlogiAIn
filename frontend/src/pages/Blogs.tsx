
import { useState } from 'react';
import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { BlogSkeleton } from "../components/Blogskeleton";
import { Footer } from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTop";
import { useBlogs } from "../hooks";

export const Blogs = () => {
    const { loading, blogs } = useBlogs();
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 5;

    if (loading) {
        return (
            <div>
                <Appbar />
                <div className="flex justify-center ">
                    <div>
                        {[...Array(blogsPerPage)].map((_, index) => (
                            <BlogSkeleton key={index} />
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    const totalPages = Math.ceil(blogs.length / blogsPerPage);
    const currentBlogs = blogs.slice((currentPage - 1) * blogsPerPage, currentPage * blogsPerPage);

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    return (
        <div>
            <Appbar />
            <div className="flex justify-center bg-zinc-300">
                <div className="flex flex-col justify-center items-center mt-4">
                    {currentBlogs.map(blog => (
                        <BlogCard
                            key={blog.id}
                            id={blog.id}
                            authorName={blog.author.name || "Anonymous"}
                            title={blog.title}
                            content={blog.content}
                            publishedDate= "May 2024"
                        />
                    ))}
                    <div className="flex mt-4">
                        <button
                            className="px-4 py-2 mx-2 mb-4 bg-gray-100 rounded hover:bg-gray-300"
                            onClick={handlePreviousPage}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button>
                        <button
                            className="px-4 py-2 mx-2 mb-4 bg-gray-100 rounded hover:bg-gray-300"
                            onClick={handleNextPage}
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
            <ScrollToTopButton />
            <Footer />
        </div>
    );
};
