import Quote from "../components/Quote.js";

const url = "http://bluepages.ibm.com/BpHttpApisv3/wsapi?allByNameFuzzy=Antoine%20Leduc"

function HomePage() {

    const QuoteBlock = (
        <div>
            <Quote/>
        </div>
    );

    return (
        
        QuoteBlock
        
        )
}

export default HomePage
