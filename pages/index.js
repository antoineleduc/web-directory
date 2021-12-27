import Head from "next/head"
import HomePage from "./dir/HomePage"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Navigation from "./components/Navigation"
import initialyzeSearch from "./scripts/initialyzeSearch"

$().on('keyup', function (e) {
  if (e.key === 'Enter' || e.keyCode === 13) {
      console.log()
    }
  });

export default function Home() {

  console.log(initialyzeSearch());

  return (
    <div className="min-h-screen bg-white">
      <body className="relative min-h-[100%] bg-white">
        <Head>
          <title>The Tech Duke - Web Directory Project</title>
        </Head>
        <main>
          <Header />
          <Navigation />
          <HomePage />
        </main>
      </body>
      <div className="h-20">
        <footer className="absolute w-full bottom-0 mb-3 mt-3 text-sm bg-white">
          <hr />
          <Footer />
        </footer>
      </div>
    </div>
    
  )
}

//"https://api.five9.com/wssupervisor/v3/SupervisorWebService?wsdl%26user=6050328%26password=B34rg6!3Antoine#"