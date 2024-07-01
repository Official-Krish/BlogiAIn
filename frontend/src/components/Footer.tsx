

export const Footer = ()  => {
    return  <div className="bg-grey pt-6 ">
        <div className="text-white font-bold text-3xl ">
            <div className="pl-5">
                BlogiAIn
            </div>
        </div>
        <div className="text-white flex justify-center mt-5">
            <div className="mb-20 flex justify-center mt-6">
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
    </div>
}