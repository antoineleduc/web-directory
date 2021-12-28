import { setHttpAgentOptions } from 'next/dist/server/config';

function Searchresults() {
    const url='https://bluepages.ibm.com/BpHttpApisv3/wsapi?allByNameFuzzy=Antoine%20Leduc';

    var XMLHttpRequest = require('xhr2');
    var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("emo").innerHTML = alert(this.responseText);
            }
        };

    xhttp.withCredentials = true;
    xhttp.open("GET", url, true);

    xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencode');

    xhttp.send();

    xhttp.onreadystatechange = (e) => {
        return (
            xhttp.responseText       
        )
    }
    
    const text = xhttp.onreadystatechange

    return (
        <div>
            {text}
        </div>
    )
}

export default Searchresults
