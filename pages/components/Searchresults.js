async function fetchURL() {

const url='https://bluepages.ibm.com/BpHttpApisv3/wsapi?allByNameFuzzy=Antoine%20Leduc';

  const response = await fetch(url, {mode: 'no-cors'})
.then(function(response) {
  console.log(response); 
}).catch(function(error) {  
  console.log('Request failed', error)  
});
  
  return
  (
  console.log(response)
  )
  
}

export default fetchURL;