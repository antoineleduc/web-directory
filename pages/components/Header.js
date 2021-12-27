import Image from "next/image"

function Header() {
    return (
        <div>
            <head>
                <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
            </head>
            <header className="flex bg-kyndryl h-40 w-full items-center justify-center overflow-hidden">
                <div className="flex w-full h-full items-center space-x-10 p-10"> 
                    <div className="">
                        <Image
                        src="/kyndryl_thin.jpg"
                        width={60}
                        height={120}
                        />
                        </div>
                    <div className="flex w-full items-center">
                        <input type="text" id="searchItem" className="flex flex-grow right-8 h-14 pl-5 rounded focus:shadow focus:outline-none" placeholder="Search..."></input>
                        <div className="absolute top-4 right-8  "> 
                        <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header