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

    return (
        <div className="flex ml-8 mr-8 mb-6 mt-2 bg-white h-full items-center max-w-screen-sm">
            <blockquote className="relative p-4 text-xl italic border-l-8 bg-[#192114]/75 rounded-3xl text-white border-[#ff462d] hover:opacity-90 quote">
                <p suppressHydrationWarning className="mb-3 text-l">{xhttp.responseText}</p>
            </blockquote>
        </div>
    )
}

export default Searchresults
