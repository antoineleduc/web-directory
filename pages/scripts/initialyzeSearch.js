function initialyzeSearch() {
 
    var XMLHttpRequest = require('xhr2');
    var xhr = new XMLHttpRequest();

    const url='http://bluepages.ibm.com/BpHttpApisv3/wsapi?allByNameFuzzy=';
    xhr.open("GET", url);
    xhr.send();

    xhr.onreadystatechange = (e) => {
    console.log(xhr.responseText)
};
    
    return (

        
        <div>
            
        </div>
    )
}

export default initialyzeSearch
