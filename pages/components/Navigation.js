import {
    HomeIcon,
    GlobeIcon,
    AtSymbolIcon,
    QuestionMarkCircleIcon
  } from "@heroicons/react/outline"
import Rellax from "rellax";

function Navigation() {

    var rellax = new Rellax('.rellax', {
        wrapper:'opacity=0'
    });

    return (
        <div className="sticky top-0 z-20">
            <section className="flex sticky w-screen h-40 bg-gradient-to-b to-white/0 from-kyndryl justify-center">
                <div className="flex w-10/12">
                    <div className="flex w-screen justify-center space-x-2 mt-2">
                        <button className="flex space-x-2 h-fit text-black bg-white border-gray-500 opacity-70 hover:opacity-80 cursor-pointer rounded-3xl p-4 pr-4 f-sm">
                        <HomeIcon className="h-5 w-5" />
                        <p>Home</p>
                        </button>
                        <button className="flex space-x-2 h-fit text-black bg-white border-gray-500 opacity-70 hover:opacity-80 cursor-pointer rounded-3xl p-4 pr-4 f-sm">
                        <GlobeIcon className="h-5 w-5" />
                        <p>Directory</p>
                        </button>
                        <button className="flex space-x-2 h-fit text-black bg-white border-gray-500 opacity-70 hover:opacity-80 cursor-pointer rounded-3xl p-4 pr-4 f-sm">
                        <QuestionMarkCircleIcon className="h-5 w-5" />
                        <p>Help</p>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Navigation;
