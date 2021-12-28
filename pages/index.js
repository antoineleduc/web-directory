import Head from "next/head"
import HomePage from "./dir/HomePage"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Navigation from "./components/Navigation"

export default function Home() {

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>The Tech Duke - Web Directory Project - {process.env.NODE_ENV} </title>
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      </Head>
      <main className="relative min-h-[100%] bg-white">
        <Header />
        <Navigation />
        <HomePage />
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

//"https://api.five9.com/wssupervisor/v3/SupervisorWebService?wsdl%26user=*password=*