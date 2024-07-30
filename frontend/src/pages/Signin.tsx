import Login from "../components/Login"
import { QuoteLogin } from "../components/QuoteLogin"

const Signin = () => {
    return <div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="grid grid-cols-1 md:grid-cols-2 w-screen h-screen">
                <Login />
            </div>
            <div className="hidden lg:block">
                <QuoteLogin/>
            </div>
            
        </div>
        
        
    </div>
}
export default Signin;