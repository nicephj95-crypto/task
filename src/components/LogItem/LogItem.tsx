import { ILogItem } from '@/types'
import { item, message, meta, timestamp } from './LogItem.css'

type LogItemProps = {
  log: ILogItem
}

const formatDate = (value: number) => {
  const date = new Date(value)
  const yyyy = date.getFullYear()
  const mm = String(date.getMonth() + 1).padStart(2, '0')
  const dd = String(date.getDate()).padStart(2, '0')
  const hh = String(date.getHours()).padStart(2, '0')
  const min = String(date.getMinutes()).padStart(2, '0')
  return `${yyyy}.${mm}.${dd} ${hh}:${min}`
}

const LogItem = ({ log }: LogItemProps) => {
  return (
    <div className={item}>
      <div>
        <p className={message}>{log.logMessage}</p>
        <p className={meta}>작성자: {log.logAuthor}</p>
      </div>
      <p className={timestamp}>{formatDate(log.logTimestamp)}</p>
    </div>
  )
}

export default LogItem
