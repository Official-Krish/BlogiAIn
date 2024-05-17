import Logo  from "../assets/logo.png"

export const Footer = ()  => {
    return  <div className="bg-black pt-6">
        <div className="text-white font-bold text-3xl pl-8">
        <img src={Logo}/> 
        </div>
        <div className="text-white flex justify-center mt-5 pb-6">
            <div className="mr-8">
                About
            </div>
            <div className="mr-8">
                Help
            </div >
            <div className="mr-8">
                Terms
            </div>
            <div className="mr-8">
                Privacy
            </div>
            <button onClick={() => {
                window.open("https://github.com/Official-Krish", '_blank', 'noopener,noreferrer');
            }} className="mr-8">
                Developer
            </button>
        </div>
    </div>
}