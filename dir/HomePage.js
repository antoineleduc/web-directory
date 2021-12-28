import Quote from "../pages/components/Quote.js";

async function fetchURL() {

const url='https://bluepages.ibm.com/BpHttpApisv3/wsapi?allByNameFuzzy=Antoine%20Leduc';

  const response = await fetch(url, {mode: 'no-cors'})
.then(function(response) {
  console.log(response); 
}).catch(function(error) {  
  console.log('Request failed', error)  
});
  
  return (
        console.log(response)
    )

}

function HomePage() {

    const Block = (
        <div>
            <Quote/>
            <div className="ml-8">
            <button onClick={async ()=> {await fetchURL()}} 
            className="flex border-kyndryl-green border-1 border-l-8 bg-kyndryl text-white rounded-xl pl-3 pr-4 pt-2 pb-2">Load Results</button>
            </div>
        </div>
    );
    
    return Block
}

export default HomePage
