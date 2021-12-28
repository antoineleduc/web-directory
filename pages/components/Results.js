import { useState } from "react";
import Header from "./Header";

function Results({ results }) {

  const [users, setUsers] = useState(results)

  const fetchUser = async () => {
    let query = document.getElementById("searchItem").value
    let baseurl = 'https://unified-profile-api.us-south-k8s.intranet.ibm.com/v3/profiles/';
    let fullUrl = baseurl.concat(query);

    const response = await fetch(fullUrl);
    const data = await response.json();  

    window.alert("UID: " + data.profiles[0].content.uid + "\nFull Name: " + data.profiles[0].content.nameFull)

    setUsers(data)
  }

    return ( 
      <> 
        <button onClick={fetchUser} className="flex bg-kyndryl rounded-2xl border-kyndryl-green border-l-8 border-2 ml-8 pl-3 pr-3 pt-0.5 pb-0.5">
            <p>Search</p>
        </button>
      </>
    )
  }
  
  export default Results

  export async function getServerSideProps() {
  
    const data = <div><p>No data</p></div>
    
    
    return { 
      props: {
        results: data,
      },
     }
  }