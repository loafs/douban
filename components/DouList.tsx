interface Props {
  list: any[]
}

const DouList = ({ list }: Props) => {
  return (
    <div>
      {list.map((status) => {
        return (
          <div
            key={status.sid}
            className="i-status-wrap"
            dangerouslySetInnerHTML={{ __html: status.content }}
          ></div>
        )
      })}
    </div>
  )
}

export default DouList
