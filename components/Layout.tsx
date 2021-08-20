/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Layout = ({ title, children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content="收藏豆瓣广播" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Link href="/" passHref>
          <div>
            <Image src="/logo.png" alt="Logo" width="40" height="40" />
            <span className="site-name">豆荚</span>
          </div>
        </Link>
      </header>
      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}></footer>
    </div>
  )
}

export default Layout
