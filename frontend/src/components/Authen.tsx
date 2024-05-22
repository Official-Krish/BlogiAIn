// import { ChangeEvent, useState } from "react";
// import { Link, useNavigate } from "react-router-dom"
// import { SignupType } from "@krishanand/medium-common"
// import axios from "axios";
// import { backend_url } from "../config";
// export const Authen = ({type}: {type : "signup" | "signin"}) =>{
//     const navigate = useNavigate();
//     const [postInputs, SetpostInputs] = useState<SignupType>({
//         name : "",
//         email : "",
//         password : ""
//     });

//     async function sendRequest(){
//         try{
//             const Response = await axios.post(`${backend_url}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postInputs);
//             const {jwt} = await Response.data;
//             localStorage.setItem("token", jwt);
//             navigate("/");
//         }catch(e){
//             alert("Incorrect Credentials")
//         }
        
//     }

//     return <div className="h-screen flex justify-center flex-col">
//         <div className="flex justify-center">
//             <div>
//             <div className="px-10">
//             {type === "signup" ? <div className="text-3xl font-extrabold">
//             Create an account
//             </div> : <div className="text-3xl font-extrabold pt-8">Login to your Account</div>}
//             <div className="text-sm text-gray-500 font-medium px-6 pt-3">
//             {type === "signin" ? "Dont have an account " : 'Already have an account?'} 
//             <Link className="pl-2 underline" to={type === "signin" ? "/signup" : "/signin"}>
//                 {type === "signin" ? "Sign up" : "Login"}
//             </Link>
//             </div>
//             </div>
//             <div className="pt-8">
//             {type === "signup" ? <LabelledInput label="Name" placeholder="Enter your username" onChange={(e)=>{
//                 SetpostInputs({
//                     ...postInputs,
//                     name:  e.target.value
//                 })
//             }}/>: null}
//             <LabelledInput label="Username" placeholder="me@example.com" onChange={(e)=>{
//                 SetpostInputs({
//                     ...postInputs,
//                     email :  e.target.value
//                 })
//             }}/>
//             <LabelledInput label="Password" type={"password"}placeholder="Password" onChange={(e)=>{
//                 SetpostInputs({
//                     ...postInputs,
//                     password:  e.target.value
//                 })
//             }}/>
//             <button onClick={sendRequest} type="button" className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Sign up</button>
//             </div>
//             </div>
            
            
            
                
//         </div>
        
//     </div>
// }
// interface LabelledInputType {
//     label: string;
//     placeholder: string;
//     onChange : (e: ChangeEvent<HTMLInputElement>) => void;
//     type ?: string;
// }
// function LabelledInput({label, placeholder, onChange, type } : LabelledInputType){
//     return <div>
//     <label className="block mb-2 text-sm font-semibold text-black text-bold pt-4">{label}</label>
//     <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
// </div>
// }


import { SignupType } from "@krishanand/medium-common"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { backend_url } from "../config";
import InputField from "./Inputfields";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ToastWrapper from "./ToastWrapper";
import Spinner from "./Spinner";
import PasswordField from "./PasswordField";
import validatePassword  from "../utils/passwordStrength";
import validateEmail from "../utils/emailValidation";
const Authen = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false)
  const [authInputs, setAuthInputs] = useState<SignupType>({
    name: "",
    email: "",
    password: "",
  });
  const [passwordStrength, setPasswordStrength] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const password = event.target.value;
    setAuthInputs({ ...authInputs, password });

    const errors = validatePassword(password);
    if (errors.length > 0) {
      setPasswordError(errors.join(" "));
      setPasswordStrength("Weak");
    } else {
      setPasswordError("");
      setPasswordStrength("Strong");
    }
  };

  async function sendRequest() {
    try {
      setLoading(true)
      if (passwordError) {
        toast.error("Password is weak");
        return;
      }
      if(!validateEmail(authInputs.email)){
        toast.error("Invalid Email");
        return;
      }
      if (authInputs.name && authInputs.email && authInputs.password) {
        const response = await axios.post(
          `${backend_url}/api/v1/user/signup`,
          authInputs
        );
        const { jwt, user } = response.data;
        localStorage.setItem("token", jwt);
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/");
      }
      else{
        toast.error("Name, Email & Password are mandatory fields.");
      }
    } catch (ex) {
      console.log(ex);
      toast.error("Something went wrong");
    }
    finally {
      setLoading(false)
    }
  }
  return (
    <div className="text-center flex flex-col justify-center items-center h-screen md:h-auto">
      <h1 className="text-4xl font-bold ">Create an account</h1>
      <h6>
        Already have an account?{" "}
        <Link to="/signin" className="underline">
          Login
        </Link>
      </h6>
      <div className="lg:w-[400px] md:w-[350px] w-screen px-2">
        <InputField
          label="Name"
          placeholder="Enter your name"
          onChange={(event) => {
            setAuthInputs({ ...authInputs, name: event.target.value });
          }}
        />
        <InputField
          label="Email"
          placeholder="Enter your email"
          type="email"
          onChange={(event) => {
            setAuthInputs({ ...authInputs, email: event.target.value });
          }}
        />
        <div className="relative">
          <PasswordField
            label="Password"
            placeholder="Enter your password"
            onChange={handlePasswordChange}
          />
          <div className="text-sm text-gray-500 mt-1 mb-3">
            Password Strength: {passwordStrength}
          </div>

        </div>
        <button
          onClick={sendRequest}
          className="w-full bg-black text-white p-4 rounded-md flex justify-center items-center gap-4"
          disabled={loading}
        >
          Sign Up
          {loading && <Spinner className="w-4 h-4"/>}
        </button>
      </div>
      <ToastWrapper />
    </div>
  );
};

export default Authen;
