import { Link, useNavigate } from "react-router-dom"
import { Avatar } from "./BlogCard"
export const Appbar = () =>{
    const CheckLogin = localStorage.getItem("token");
    if(!CheckLogin){
        return <div className="border-b flex justify-between px-10 py-4">
        <Link to="/" className="flex flex-col justify-center cursor-pointer">
            <div>
                Medium
            </div>
        </Link>
        <Link to="/signup">
        <button>
            Signup / Signin
        </button>
        </Link>
        
    </div>
    }
    return <div className="border-b flex justify-between px-10 py-4">
        <Link to="/" className="flex flex-col justify-center cursor-pointer">
            <div>
                Medium
            </div>
        </Link>
        
        {/* <div>
            <Link to="/publish">
            <button className="mr-8 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">New</button>
            </Link>
         
            <div className="relative group">
            <Avatar name={"Krish"}/>
            <div className="absolute hidden group-hover:block bg-gray-700 text-white mt-2 p-2 rounded shadow-lg">
              <a href="/interview-1" className="block px-4 py-2 hover:bg-gray-600">Interview 1</a>
              <a href="/interview-2" className="block px-4 py-2 hover:bg-gray-600">Interview 2</a>
            </div>
          </div>
        </div> */}
        <div className="flex items-center justify-between">
            <Link to="/publish">
                <button className="mt-2.5 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                    New
                </button>
            </Link>
            {/* <div className="relative group ml-8 pr-10">
                <Avatar name={"Krish"} />
                <div className="absolute hidden group-hover:block bg-gray-700 text-white mt-2 p-2 rounded shadow-lg">
                    <button onClick={()=>{
                        window.open("https://github.com/Official-Krish", '_blank', 'noopener,noreferrer');
                    }} className="block px-4 py-2 hover:bg-gray-600">Developer</button>
                    <button onClick={() => {
                        localStorage.removeItem("token");
                        <Link to ="/"></Link>
                    }} className="block px-4 py-2 hover:bg-gray-600">Logout</button>
                </div>
            </div> */}


            <ul role="list" className="p-6 divide-y divide-slate-200">
                <li className="flex py-4 first:pt-0 last:pb-0">
                    <Avatar name={"krish"}/>
                    <div className="ml-3 overflow-hidden">
                        <button onClick={()=>{
                        window.open("https://github.com/Official-Krish", '_blank', 'noopener,noreferrer');
                    }} className="block px-4 py-2 hover:bg-gray-600">Developer</button>
                    <button onClick={() => {
                        localStorage.removeItem("token");
                        <Link to ="/"></Link>
                    }} className="block px-4 py-2 hover:bg-gray-600">Logout</button>
                    </div>
                </li>
            </ul>
        </div>
        
            
    </div>
}
