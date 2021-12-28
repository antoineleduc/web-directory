import Quote from "../components/Quote.js";
import Searchresults from "../../Searchresults.js"

function HomePage() {

    const Block = (
        <div>
            <Quote/>
            <div className="ml-8">
            <button onClick={Searchresults} className="flex border-kyndryl-green border-1 border-l-8 bg-kyndryl text-white rounded-xl pl-3 pr-4 pt-2 pb-2">Load Results</button>
            </div>
        </div>
    );
    
    return Block
}

export default HomePage
