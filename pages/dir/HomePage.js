import Quote from "../components/Quote.js";


export async function getStaticProps(context) {
  const url='https://bluepages.ibm.com/BpHttpApisv3/wsapi?allByNameFuzzy=Antoine%20Leduc';

  const res = await fetch(url)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data }, // will be passed to the page component as props
  }
}

function HomePage({ data }) {
 
    const Quoteblock = (
        <div>
            <Quote/>
        </div>
    );
    
    const Results = (
        <div>
            <p>{data}</p>
        </div>
    );
    
    return (
    
        <div>
            <Quoteblock/>
            <Results/>
        </div>
    
    )
}

export default HomePage
