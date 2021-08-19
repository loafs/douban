import styles from '../styles/User.module.css'

const ListWrap = ({ list, uid }) => {
  return (
    <div>
      {list.map((t) => {
        return (
          <p key={t}>
            <a href={`/u/${uid}?listName=${t}`} className={styles.listLink}>
              {t}
            </a>
          </p>
        )
      })}
    </div>
  )
}

export default ListWrap
