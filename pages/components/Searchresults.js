import Cors from 'cors'
import initMiddleware from '../../lib/init.middleware'

export default async function Searchresults(req, res) {

    await cors(req, res)

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
    xhttp.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhttp.setRequestHeader('Access-Control-Allow-Credentials', 'true');

    xhttp.send();

    return (
        xhttp.responseText
    )
}