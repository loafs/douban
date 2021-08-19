import Head from 'next/head'
import React from 'react'
import Gun from 'gun'
import styles from '../styles/Home.module.css'

const gun = Gun('https://dougun.herokuapp.com/gun')
const collection = gun.get('collection-beta2')

interface State {
  statuses: any[]
}

class Home extends React.Component<any, State> {
  constructor(props) {
    super(props)
    this.state = {
      statuses: [],
    }
  }

  componentDidMount() {
    const statuses = []
    collection.map().on(function (collection, id) {
      console.log('###', collection, id)
      statuses.push(collection)
    })
    this.setState({ statuses })
  }

  render() {
    const { statuses } = this.state
    return (
      <div className={styles.container}>
        <Head>
          <title>豆瓣</title>
          <meta name="description" content="收藏豆瓣广播" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <div className={styles.list}>
            {statuses.map((status) => {
              return (
                <div
                  key={status.sid}
                  className="i-status-wrap"
                  dangerouslySetInnerHTML={{ __html: status.content }}
                ></div>
              )
            })}
          </div>
        </main>

        <footer className={styles.footer}></footer>
      </div>
    )
  }
}

export default Home
