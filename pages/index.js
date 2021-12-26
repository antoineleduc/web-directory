import Head from "next/head"
import HomePage from "./dir/HomePage"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Navigation from "./components/Navigation"

export default function Home() {

  return (
    <div className="bg-white h-full">
      <body className="bg-white">
      <Head>
        <title>Web Directory</title>
      </Head>
      <main>
        <Header />
        <Navigation />
        <HomePage />
        <Footer />
      </main>
      </body>
    </div>
    
  )
}

//"https://api.five9.com/wssupervisor/v3/SupervisorWebService?wsdl%26user=6050328%26password=B34rg6!3Antoine#