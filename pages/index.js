import Head from "next/head"
import HomePage from "./dir/HomePage"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Navigation from "./components/Navigation"

export default function Home() {

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"/>
        <title>The Tech Duke - Web Directory Project - {process.env.NODE_ENV} </title>
      </Head>
      <body className="relative min-h-[100%] bg-white">
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