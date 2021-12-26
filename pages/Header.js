import Image from "next/image"

function Header() {
    return (
        <div>
            <header className="flex bg-kyndryl h-40 w-screen items-center justify-center overflow-hidden">
                <div className="flex w-screen h-full items-center space-x-10 p-10"> 
                <div className="">
                    <Image
                    src="/kyndryl_thin.jpg"
                    width={60}
                    height={120}
                    />
                    </div>
                <div className="flex w-screen items-center">
                    <input type="text" className="flex flex-grow right-8 h-14 pl-5 rounded focus:shadow focus:outline-none" placeholder="Search..."></input>
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
