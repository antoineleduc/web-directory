async function fetchURL() {

const url='https://bluepages.ibm.com/BpHttpApisv3/wsapi?allByNameFuzzy=Antoine%20Leduc';

  const response = await fetch(url, {mode: 'no-cors'})
.then(function(response) {
  console.log(response); 
}).catch(function(error) {  
  console.log('Request failed', error)  
});
  
  return (
        <div className="flex ml-8 mr-8 mb-6 mt-2 bg-white h-full items-center max-w-screen-sm">
            <blockquote className="relative p-4 text-xl italic border-l-8 bg-[#192114]/75 rounded-3xl text-white border-[#ff462d] hover:opacity-90 quote">
                
                <p suppressHydrationWarning className="mb-3 text-l">{response}</p>
                
            </blockquote>
        </div>
    )

}

export default fetchURL;