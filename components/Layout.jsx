import React from 'react';

import Head from "next/head";
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className='layout'>

      <Head>
        <title>IGS | Emporium</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/tv.ico" type="image/x-icon" />
        <link rel="icon" href="/tv.ico" type="image/x-icon" />
      </Head>

      <header>
        <Navbar />
      </header>

      <main className='main-container'>{children}</main>

      <footer>
        <Footer />
      </footer>

    </div>
  )
}

export default Layout