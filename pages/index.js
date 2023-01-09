import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Image from 'next/image'
import React from 'react'

export default function Home() {
  React.useEffect(() => {
    setTimeout(() =>{
      window.location.href = "https://techyjaunt.com";
    },5000)
  },[])
  
  return (
    <div className="container">
      <Head>
        <title>We are now Techy Jaunt!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Image src="https://techyjaunt.com/images/logo_techy.svg" width={235} height={70} />
        <Header title="We are now Techy Jaunt!" />
        <p className="description">
          You will be redirected shortly
        </p>
      </main>

      <Footer />
    </div>
  )
}
