import { Authen } from "../components/Authen"
import { Quote } from "../components/quote"

export const Signup = () =>{
    return <div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div>
                <Authen type="signup" />
            </div>
            <div className="hidden lg:block">
                <Quote/>
            </div>
            
        </div>
        
        
    </div>
}