import Quote from "./Quote";

const uri = "http://bluepages.ibm.com/BpHttpApisv3/wsapi?allByNameFuzzy=Antoine%20Leduc"

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function Center() {

    const QuoteBlock = (
        <div>
            <Quote/>
            <Quote/>
            <Quote/>
        </div>
    );

    const LoggedInUser = (
        httpGet(uri)
    );


    return QuoteBlock
    return LoggedInUser
}

export default Center
