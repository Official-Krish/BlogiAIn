import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { SignupType } from "@krishanand/medium-common"
import axios from "axios";
import { backend_url } from "../config";
export const Authen = ({type}: {type : "signup" | "signin"}) =>{
    const navigate = useNavigate();
    const [postInputs, SetpostInputs] = useState<SignupType>({
        name : "",
        email : "",
        password : ""
    });

    async function sendRequest(){
        try{
            const Response = await axios.post(`${backend_url}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postInputs);
            const {jwt} = await Response.data;
            localStorage.setItem("token", jwt);
            navigate("/");
        }catch(e){
            alert("Incorrect Credentials")
        }
        
    }

    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div>
            <div className="px-10">
            {type === "signup" ? <div className="text-3xl font-extrabold">
            Create an account
            </div> : <div className="text-3xl font-extrabold pt-8">Login to your Account</div>}
            <div className="text-sm text-gray-500 font-medium px-6 pt-3">
            {type === "signin" ? "Dont have an account " : 'Already have an account?'} 
            <Link className="pl-2 underline" to={type === "signin" ? "/signup" : "/signin"}>
                {type === "signin" ? "Sign up" : "Login"}
            </Link>
            </div>
            </div>
            <div className="pt-8">
            {type === "signup" ? <LabelledInput label="Name" placeholder="Enter your username" onChange={(e)=>{
                SetpostInputs({
                    ...postInputs,
                    name:  e.target.value
                })
            }}/>: null}
            <LabelledInput label="Username" placeholder="me@example.com" onChange={(e)=>{
                SetpostInputs({
                    ...postInputs,
                    email :  e.target.value
                })
            }}/>
            <LabelledInput label="Password" type={"password"}placeholder="Password" onChange={(e)=>{
                SetpostInputs({
                    ...postInputs,
                    password:  e.target.value
                })
            }}/>
            <button onClick={sendRequest} type="button" className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Sign up</button>
            </div>
            </div>
            
            
            
                
        </div>
        
    </div>
}
interface LabelledInputType {
    label: string;
    placeholder: string;
    onChange : (e: ChangeEvent<HTMLInputElement>) => void;
    type ?: string;
}
function LabelledInput({label, placeholder, onChange, type } : LabelledInputType){
    return <div>
    <label className="block mb-2 text-sm font-semibold text-black text-bold pt-4">{label}</label>
    <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
</div>
}
