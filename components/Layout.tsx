/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { GitHub, Mail } from 'react-feather'
import styles from '../styles/Home.module.css'

interface Props {
  title: string
  children: any
  withFooter?: boolean
}

const Layout = ({ title, children, withFooter }: Props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content="收藏豆瓣广播" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="referrer" content="no-referrer" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-RZ80DJ5MQ6"
        ></script>
        <script async src="/scripts/ga.js"></script>
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

      {withFooter && (
        <footer className={styles.footer}>
          <Link
            href="https://github.com/loafs/chrome-extension-douban"
            passHref
          >
            <GitHub style={{ margin: '0 10px' }} />
          </Link>

          <Link href="mailto:chezhe@hey.com" passHref>
            <Mail style={{ margin: '0 10px' }} />
          </Link>
        </footer>
      )}
    </div>
  )
}

export default Layout
