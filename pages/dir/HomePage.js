import Quote from "../components/Quote.js";
import Searchresults from "../components/searchResults.js";

const uri = "https://bluepages.ibm.com/BpHttpApisv3/wsapi?allByNameFuzzy=Antoine%20Leduc"

function HomePage() {

    const Block = (
        <div>
            <Quote/>
            <Searchresults/>
        </div>
    );
    
    return Block
}

export default HomePage
