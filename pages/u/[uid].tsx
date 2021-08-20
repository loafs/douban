import { Component, useEffect, useState } from 'react'
require('gun/lib/load.js')
import Gun from 'gun'
import Layout from '../../components/Layout'
import styles from '../../styles/User.module.css'
import DouList from '../../components/DouList'
import ListWrap from '../../components/ListWrap'

interface Props {
  listName?: string
  uid: string
}

interface State {
  list: any[]
}
class User extends Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
    }
  }

  gun = null

  componentDidMount() {
    this.gun = Gun('https://doujia.herokuapp.com/gun')
    this.fetch()
  }

  fetch = () => {
    const { uid, listName } = this.props
    if (uid) {
      if (listName) {
        const doulist = this.gun.get(`${uid}/${listName}`)
        doulist.open((result) => {
          this.setState({
            list: Object.values(result)
              .map((t: any) => {
                return {
                  uid: t.uid,
                  sid: t.sid,
                  content: t.content,
                }
              })
              .filter((t) => t.sid),
          })
        })
      } else {
        const doujia = this.gun.get(uid)

        doujia.open((result) => {
          this.setState({
            list: Object.values(result).filter((t) => t),
          })
        })
      }
    }
  }

  render() {
    const { list } = this.state
    const { uid, listName } = this.props
    return (
      <Layout title={`${uid} 的豆荚`}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            <a href={`/u/${uid}`}>{uid}</a>
            {listName ? (
              <span>{`/${listName}`}</span>
            ) : (
              <span>{' 的豆荚'}</span>
            )}
          </h2>
          {listName ? (
            <DouList list={list} />
          ) : (
            <ListWrap list={list} uid={uid} />
          )}
        </div>
      </Layout>
    )
  }
}

export async function getServerSideProps(context) {
  return {
    props: context.query,
  }
}

export default User
