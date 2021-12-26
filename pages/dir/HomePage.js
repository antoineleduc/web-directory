import Quote from "../components/Quote.js";
import userPresence from "../components/userPresence.js";


const url = "http://bluepages.ibm.com/BpHttpApisv3/wsapi?allByNameFuzzy=Antoine%20Leduc"

function HomePage() {

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
            <div className="flex max-h-9 items-start min-w-fit pr-8 justify-center w-auto right-8">
                <userPresence />
            </div>
        </div>
        )
}

export default HomePage
