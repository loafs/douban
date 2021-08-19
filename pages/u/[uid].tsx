import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Gun from 'gun'
import Layout from '../../components/Layout'
import styles from '../../styles/User.module.css'
import DouList from '../../components/DouList'
import ListWrap from '../../components/ListWrap'

const gun = Gun('https://dougun.herokuapp.com/gun')

const User = ({}) => {
  const router = useRouter()
  const { uid, listName } = router.query
  const [list, setList] = useState([])
  useEffect(() => {
    if (uid) {
      if (listName) {
        const doulist = gun.get(`${uid}/${listName}`)
        const _list = []
        doulist.map().on((item, id) => {
          _list.push(item)
        })
        setList(_list)
      } else {
        const doulist = gun.get(uid)
        const _list = []
        doulist.map().on((item, id) => {
          _list.push(item)
        })
        setList(_list)
      }
    }
  }, [uid, listName])

  return (
    <Layout title={uid}>
      <div className={styles.content}>
        <h2 className={styles.title}>
          <a href={`/u/${uid}`}>{uid}</a>
          {listName ? <span>{`/${listName}`}</span> : <span>{' 的豆列'}</span>}
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

export default User
