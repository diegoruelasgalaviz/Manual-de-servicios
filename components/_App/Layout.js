import React from 'react'
import { ToastContainer, Slide } from 'react-toastify'
import Head from "next/head"
import GoTop from './GoTop'
import Preloader from './Preloader'

const Layout = ({ children }) => {

    // Preloader
    const [loader, setLoader] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => setLoader(false), 1000);
    }, [])

    return(
        <React.Fragment>
            <Head>
                <title>Manuales Emerymark</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="Manuales de Emerymark" />
                <meta name="og:title" property="og:title" content="Manuales de Emerymark"></meta>
                <meta name="twitter:card" content="Manuales de Emerymark"></meta>
                <link rel="canonical" href="https://ston-react.envytheme.com/"></link>
            </Head>

            {children}

            {loader ? <Preloader /> : null}
        
            <GoTop scrollStepInPx="100" delayInMs="10.50" />

            <ToastContainer transition={Slide} />
        </React.Fragment>
    );
}

export default Layout;