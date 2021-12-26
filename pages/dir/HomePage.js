import Quote from "../components/Quote.js";

const uri = "http://bluepages.ibm.com/BpHttpApisv3/wsapi?allByNameFuzzy=Antoine%20Leduc"

function HomePage() {

    const QuoteBlock = (
        <div>
            <Quote/>
            <Quote/>
            <Quote/>
            <Quote/>
            <Quote/>
            <Quote/>
            <Quote/>
            <Quote/>
            <Quote/>
            <Quote/>
            <Quote/>
        </div>
    );
    
    return QuoteBlock
}

export default HomePage
