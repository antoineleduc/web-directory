import Quote from "../components/Quote.js";

const uri = "http://bluepages.ibm.com/BpHttpApisv3/wsapi?allByNameFuzzy=Antoine%20Leduc"

function Home() {

    const QuoteBlock = (
        <div>
            <Quote/>
            <Quote/>
            <Quote/>
        </div>
    );

    const LoggedInUser = (
        (uri)
    );


    return QuoteBlock
    return LoggedInUser
}

export default Home
