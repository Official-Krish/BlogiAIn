import { useEffect, useState } from "react"
import axios from "axios";
import { backend_url } from "../config";
import { useNavigate } from "react-router-dom";


export interface Blog {
    "content": string;
    "title": string;
    "id": number
    "author": {
        "name": string
    }
}

export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        axios.get(`${backend_url}/api/v1/blog/bulk`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then(response => {
                setBlogs(response.data.blogs);
                setLoading(false);
            })
    }, [])

    return {
        loading,
        blogs
    }
}


export const useBlog = ({ id }: { id: string }) => {
    const navigate = useNavigate();
	const [loading, setLoading] = useState(true);
	const [submittingBookmark, setSubmittingBookmark] = useState(false);
	const [submittingClap, setSubmittinClap] = useState(false);
	const [blog, setBlog] = useState<BlogType>({
		id: "",
		title: "",
		content: "",
		publishedDate: "",
		author: {
			id: "",
			name: "",
		},
		claps: [],
	});

	async function fetchBlog() {
		const token = localStorage.getItem("token");
		if (!token) {
			navigate("/signup");
		}
		const response = await axios.get(`${backend_url}/api/v1/blog/${id}`, {
			headers: {
				Authorization:token,
			},
		});
		setBlog(response.data);
		setLoading(false);
	}

	useEffect(() => {
		fetchBlog();
	}, [id]);

	async function deleteBlog(blogId: string) {
		const token = localStorage.getItem("token");
		if (!token) {
			navigate("/signin");
		}
		const response = await axios.delete(`${backend_url}/api/v1/blog/${blogId}`, {
			headers: {
				Authorization: token,
			},
		});
		return response.data.message;
	}

	async function editBlog({ id, title, content }: {  id: string; title: string; content: string }) {
		const token = localStorage.getItem("token");
		if (!token) {
			navigate("/signin");
		}
		setLoading(true);
		try {
			const response = await axios.put(
				`${backend_url}/api/v1/blog/${id}`,
				{
					id: id,
					title: title,
					content: content,
				},
				{
					headers: {
						Authorization: token,
					},
				}
			);
			return response.data;
		} catch (e) {
			return { error: "An error has occured trying to edit the blog" };
		} finally {
			setLoading(false);
		}
	}

	async function bookmarkBlog() {
		const token = localStorage.getItem("token");
		if (!token) {
			navigate("/signin");
		}
		setSubmittingBookmark(true);
		try {
			const response = await axios.post(
				`${backend_url}/api/v1/bookmark`,
				{
					blogId: id,
				},
				{
					headers: {
						Authorization: token,
					},
				}
			);
			fetchBlog();
			return response.data;
		} catch (e) {
			return { error: "An error has occured trying to edit the blog" };
		} finally {
			setSubmittingBookmark(false);
		}
	}

	async function unbookmarkBlog(bookmarkId: string) {
		const token = localStorage.getItem("token");
		if (!token) {
			navigate("/signin");
		}
		setSubmittingBookmark(true);
		try {
			const response = await axios.delete(`${backend_url}/api/v1/bookmark/${bookmarkId}`, {
				headers: {
					Authorization: token,
				},
			});
			fetchBlog();
			return response.data;
		} catch (e) {
			return { error: "An error has occured trying to edit the blog" };
		} finally {
			setSubmittingBookmark(false);
		}
	}

	async function likeBlog() {
		try {
			const token = localStorage.getItem("token");
			if (!token) {
				navigate("/signin");
			}
			setSubmittinClap(true);
			const response = await axios.post(
				`${backend_url}/api/v1/clap`,
				{
					blogId: id,
				},
				{
					headers: {
						Authorization: token,
					},
				}
			);
			fetchBlog();
			return response.data;
		} catch (e) {
			return { error: "An error has occured trying to edit the blog" };
		} finally {
			setSubmittinClap(false);
		}
	}

	return {
		loading,
		blog,
		submittingBookmark,
    submittingClap,
		deleteBlog,
		editBlog,
		bookmarkBlog,
		unbookmarkBlog,
		likeBlog,
	};

}

interface BlogType {
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
  export const useBookmarks = () => {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(true);
	const [bookmarks, setBookmarks] = useState([]);

	useEffect(() => {
		async function fetchBookmarks() {
			const token = localStorage.getItem("token");
			if (!token) {
				navigate("/signin");
			}
			const response = await axios.get(`${backend_url}/api/v1/bookmark`, {
				headers: {
					Authorization: token,
				},
			});
			setBookmarks(response.data.payload);
			setLoading(false);
		}
		fetchBookmarks();
	}, []);

	return {
		loading,
		bookmarks,
	};
};