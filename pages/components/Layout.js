import Head from "next/head"
import Header from "./Header"
import Results from "./Results"
import Footer from "./Footer"
import Navigation from "./Navigation"
import Image from "next/image"
import Quote from "./Quote"

const Layout = ({children}) => {
    return (
        <div>
            <Header />
            <Navigation />
            <Quote />
            { children }
            <Footer />
        </div>
    )
}

export default Layout
