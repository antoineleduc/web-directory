import Quote from "./Quote";

const uri = "http://bluepages.ibm.com/BpHttpApisv3/wsapi?allByNameFuzzy=Antoine%20Leduc"

function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
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
        httpGetAsync( uri, any )
    );


    return QuoteBlock
}

export default Center
