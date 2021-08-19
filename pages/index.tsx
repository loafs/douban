import Head from 'next/head'
import React from 'react'
import Gun from 'gun'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'

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
      <Layout title="豆瓣">
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
      </Layout>
    )
  }
}

export default Home
