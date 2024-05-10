import axios from "axios";
import { useEffect, useState } from "react"
import { backend_url } from "../config";


export const useBlogs = () =>{
    const [Loading , setLoading] = useState(true);
    const [Blogs, setBlogs] = useState([]);
    useEffect(()=>{
        axios.get(`${backend_url}/api/v1/blog/bulk`,{
            headers : {
                Authorization : localStorage.getItem("token")
            }
        })
        .then(response =>{
            setBlogs(response.data.blogs);
            setLoading(false)
        })
    },[])
    return {
        Loading,
        Blogs
    }

}