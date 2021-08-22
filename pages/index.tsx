/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react'
import Image from 'next/image'
import Layout from '../components/Layout'
import Features from '../components/Feature'
class Home extends React.Component {
  render() {
    return (
      <Layout title="豆荚" withFooter>
        <div className="home-page" style={{ margin: '0 auto', width: 800 }}>
          <Features />
        </div>
      </Layout>
    )
  }
}

export default Home
