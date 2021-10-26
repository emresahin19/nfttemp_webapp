import React from "react";
import Head from "next/head";

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
        <React.Fragment>
          <Component {...pageProps} />
        </React.Fragment>
        )
}

export default MyApp
