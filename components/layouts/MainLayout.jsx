import styles from './MainLayout.module.css'
import  Head from 'next/head'
import Navbar from '../Navbar'
import React from 'react'

export const MainLayout = ({children}) => {
  return (
    <div className={styles.container}>
    <Head>
      <title>Home</title>
      <meta name="description" content="Home" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Navbar/>

    <main className={styles.main}>
    {children}     

    </main>


  </div>
  )
}
