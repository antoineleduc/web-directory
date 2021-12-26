import Quote from "../components/Quote.js";
import userPresence from "../components/userPresence.js";


const url = "http://bluepages.ibm.com/BpHttpApisv3/wsapi?allByNameFuzzy=Antoine%20Leduc"

function HomePage() {

    const userPresence = (
        <div className="flex bg-kyndryl/80 text-white font-semibold p-1 items-center rounded-full space-x-2 border-kyndryl-green/60 border-2">
            <span className="animate-pulse items-center justify-start bg-green-500 w-8 h-8 rounded-full"> </span>
            <p className="flex flex-grow pr-3">Antoine Leduc</p>
        </div>)
    
    return (
        <div className="flex justify-center w-full">
            <div className=" h-fit w-full right-4">
            <Quote/>
                <div className="ml-8 w-5/6">
                    <p className="ml-6 text-3xl font-bold underline">
                        Welcome to my project webpage
                    </p>
                    <br /><br />
                    <ul>
				        <li>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi. Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc.</li>
				    </ul>
                </div>
            </div>
            <div className="flex-col w-3/12 pr-0 space-y-2.5">
                <div className="flex max-h-9 items-start min-w-fit pr-8 w-full right-8">
                    {userPresence}
                </div>
                <div className="flex max-h-9 items-start min-w-fit pr-8 w-auto right-8">
                    {userPresence}
                </div>
                <div className="flex max-h-9 items-start min-w-fit pr-8 w-auto right-8">
                    {userPresence}
                </div>
                <div className="flex max-h-9 items-start min-w-fit pr-8 w-auto right-8">
                    {userPresence}
                </div>
                <div className="flex max-h-9 items-start min-w-fit pr-8 w-auto right-8">
                    {userPresence}
                </div>
                <div className="flex max-h-9 items-start min-w-fit pr-8 w-auto right-8">
                    {userPresence}
                </div>
            </div>
        </div>
        )
}

export default HomePage
