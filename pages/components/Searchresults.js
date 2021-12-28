const url='https://bluepages.ibm.com/BpHttpApisv3/wsapi?allByNameFuzzy=Antoine%20Leduc';

async function fetchMovies() {
  const response = await fetch(url);
  // waits until the request completes...
  console.log(response);
}