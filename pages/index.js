import Head from "next/head"
import Footer from "./components/Footer"
import Navigation from "./components/Navigation"
import shuffle from "lodash.shuffle";
import "babel-polyfill";
import Image from "next/image"

function Header() {

    return (
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
                    <div id="searchBox" className="flex w-full items-center">
                        <input type="text" id="searchItem" className="flex flex-grow right-8 h-14 pl-5 rounded focus:shadow focus:outline-none" placeholder="Search..."></input>
                        <div className="absolute top-4 right-8  "> 
                        <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}


function Quote() {

  var quotes = [
    ["Technology is best when it brings people together","Matt Mullenweg, Social Media Entrepreneur"],
    ["It has become appallingly obvious that our technology has exceeded our humanity.","Albert Einstein, Scientist"],
    ["It is only when they go wrong that machines remind you how powerful they are.","Clive James, Broadcaster and Journalist"],
    ["The Web as I envisaged it, we have not seen it yet. The future is still so much bigger than the past.","Tim Berners-Lee, Inventor of the World Wide Web"],
    ["If it keeps up, man will atrophy all his limbs but the push-button finger.","Frank Lloyd Wright, Architect"],
    ["If future generations are to remember us more with gratitude than sorrow, we must achieve more than just the miracles of technology. We must also leave them a glimpse of the world as it was created, not just as it looked when we got through with it.","Lyndon B. Johnson, Former President of the United States of America"],
    ["Once a new technology rolls over you, if you're not part of the steamroller, you're part of the road.","Stewart Brand, Writer"],
    ["It's not a faith in technology. It's faith in people.","Steve Jobs, Co-founder of Apple"],
    ["Technology is a useful servant but a dangerous master.","Christian Lous Lange, Historian"],
    ["The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life.","Bill Gates, Co-founder of Microsoft"],
    ["Stay Hungry. Stay Foolish.", "Steve Jobs, Co-founder of Apple"],
    ["Simplicity is the ultimate sophistication.", "Leonardo Da Vinci"]
  ];

    const randomResult = shuffle(quotes).pop(); 

    return (
        <div className="flex ml-8 mr-8 mb-6 mt-2 bg-white h-full items-center max-w-screen-sm">
            <blockquote className="relative p-4 text-xl italic border-l-8 bg-[#192114]/75 rounded-3xl text-white border-[#ff462d] hover:opacity-90 quote">
                <p className="font-bold text-xl mx-2 font-serif">“</p>
                <p suppressHydrationWarning className="mb-3 text-l">{randomResult[0]}</p>
                <p className="font-bold mb-2 text-xl text-right mr-6 font-serif">”</p>
                <p suppressHydrationWarning className="mb-1 text-sm italic font-bold text-right mr-4">
                    —&ensp;{randomResult[1]}
                </p>
            </blockquote>
        </div>
    )
}

export const getStaticProps = async () => {

    let query = 'Antoine Leduc'
    let baseurl = 'https://bluepages.ibm.com/BpHttpApisv3/wsapi?allByNameFuzzy=';
    let fullUrl = baseurl.concat(query);
  
    const res = await fetch(fullUrl)
    const data = await res.text()
  
    return {
      props: { results: data }, // will be passed to the page component as props
    }
  }
  
  
export const HomePage = ({ results })  => {
   
      
      return (
      
        <div className="min-h-screen bg-white">
          <Head>
            <title>The Tech Duke - Web Directory Project - {process.env.NODE_ENV} </title>
            <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
          </Head>
          <main className="relative min-h-[100%] bg-white">
            <Header />
            <Navigation />
            <div>
            <Quote/>
            <div className="flex ml-8 mr-8 mb-6 mt-2 bg-white h-full items-center max-w-screen-sm">
                <blockquote className="relative p-4 text-xl italic border-l-8 bg-[#192114]/75 rounded-3xl text-white border-[#ff462d] hover:opacity-90 quote">
                    <p suppressHydrationWarning className="mb-3 text-l">{results}</p>
                </blockquote>
            </div>
        </div>
          </main>
          <div className="h-20">
            <footer className="absolute w-full bottom-0 mb-3 mt-3 text-sm bg-white">
              <hr />
              <Footer />
            </footer>
          </div>
        </div>
      
      )
  }

export default HomePage