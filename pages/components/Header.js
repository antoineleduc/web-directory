import { useState } from "react";
import Header from "./Header";
import "babel-polyfill";
import Image from "next/image"
import { useEffect } from "react";


function Results({ results }) {

  const [users, setUsers] = useState(results)

  const fetchUser = async () => {

    let query = document.getElementById("searchItem").value
    let baseurl = 'https://unified-profile-api.us-south-k8s.intranet.ibm.com/v3/profiles/';
    let fullUrl = baseurl.concat(query);

    const response = await fetch(fullUrl);
    const data = await response.json();  

    if (!response.ok){window.alert("No results...\nMake sure you are connected to the IBM VPN and try again.")}

    if (response.ok){
    var fullName = data.profiles[0].content.nameFull
    var uid = data.profiles[0].content.uid
    var email = data.profiles[0].content.preferredIdentity
    var address = data.profiles[0].content.address.business.address[0]
    var location = data.profiles[0].content.address.business.location
    var deptCode = data.profiles[0].content.dept.code
    var deptTitle = data.profiles[0].content.dept.title

    window.alert("UID: " + uid + "\nFull Name: " + fullName + "\nEmail: " + email + "\nWork Location: " + address + ", " + location + "\nDepartment: " + deptCode + " - " + deptTitle)
  }
    setUsers(data)
  }
    return ( 
      <> 
        <div>
            <header className="flex bg-kyndryl h-40 w-full items-center justify-center overflow-hidden">
                <div className="flex w-full h-full items-center space-x-10 p-10"> 
                    <div className="">
                        <Image
                        src="/kyndryl_thin.jpg"
                        width={60}
                        height={120}
                        />
                        </div>
                    <div className="flex w-full items-center">
                        <input type="text" id="searchItem" onKeyDown={useEffect(() => 
                        {
                            const listener = event => {
                                if (event.code === "Enter" || event.code === "NumpadEnter") {
                                    console.log("Enter key was pressed.");
                                    fetchUser()
                                }
                                };
                                document.addEventListener("keydown", listener);
                                return () => {
                                document.removeEventListener("keydown", listener);
                                };
                            }, [])
                        } 
                        className="flex flex-grow right-8 h-14 pl-5 rounded focus:shadow focus:outline-none" placeholder="Search..."></input>
                        <div className="absolute top-4 right-8  "> 
                        <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
                        </div>
                    </div>
                </div>
            </header>
        </div>
      </>
    )
  }
  
  export default Results

  export async function getServerSideProps() {
  
    let query = document.getElementById("searchItem").value
    let baseurl = 'https://unified-profile-api.us-south-k8s.intranet.ibm.com/v3/profiles/';
    let fullUrl = baseurl.concat(query);
    
    const res = await fetch(fullUrl);
    const data = await res.json();  
    
    
    return { 
      props: {
        data,
      },
     }
  }