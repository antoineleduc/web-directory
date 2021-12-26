import Head from "next/head"
import Home from "./dir/Home"
import Footer from "./Footer"
import Header from "./Header"
import Navigation from "./Navigation"

export default function Home() {

  return (
    <div className="bg-white h-full">
      <Head>
        <title>Web Directory</title>
      </Head>

      <main>
        <Header />
        <Navigation />
        <Home />
        <Footer />
      </main>
    </div>
    
  )
}

//"https://api.five9.com/wssupervisor/v3/SupervisorWebService?wsdl%26user=6050328%26password=B34rg6!3Antoine#