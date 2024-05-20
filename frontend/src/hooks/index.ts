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
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>();

    useEffect(() => {
        axios.get(`${backend_url}/api/v1/blog/${id}`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then(response => {
                setBlog(response.data);
                setLoading(false);
            })
    }, [id])

    return {
        loading,
        blog
    }

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