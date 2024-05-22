import  Authen  from "../components/Authen"
import { Quote } from "../components/quote"

export const Signup = () =>{
    return <div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="grid grid-cols-1 md:grid-cols-2 w-screen h-screen">
                <Authen/>
            </div>
            <div className="hidden lg:block">
                <Quote/>
            </div>
            
        </div>
        
        
    </div>
}