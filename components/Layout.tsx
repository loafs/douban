import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Layout = ({ title, children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content="收藏豆瓣广播" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}></footer>
    </div>
  )
}

export default Layout
