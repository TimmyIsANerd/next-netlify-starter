import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Image from 'next/image'
import React from 'react'

export default function Home() {
  React.useEffect(() => {
    setTimeOut(() =>{
      window.location.href = "https://techyjaunt.com";
    },3000)
  },[})
  
  return (
    <div className="container">
      <Head>
        <title>We are now Techy Jaunt!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Image src="https://techyjaunt.com/images/logo_techy.svg"  />
        <Header title="We are now Techy Jaunt!" />
        <p className="description">
          You will be redirected shortly
        </p>
      </main>

      <Footer />
    </div>
  )
}
