import Quote from "../components/Quote.js";

const uri = "https://bluepages.ibm.com/BpHttpApisv3/wsapi?allByNameFuzzy=Antoine%20Leduc"

function HomePage() {

    const QuoteBlock = (
        <div>
            <Quote/>
        </div>
    );
    
    return QuoteBlock
}

export default HomePage
