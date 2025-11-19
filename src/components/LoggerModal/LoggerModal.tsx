import { useEffect } from 'react'
import LogItem from '@/components/LogItem/LogItem'
import { useAppDispatch, useTypedSelector } from '@/hooks/redux'
import { clearLogs, closeLogger } from '@/store/slices/loggerSlice'
import { backdrop, body, clearButton, closeButton, empty, header, headerActions, heading, modal, subtitle } from './LoggerModal.css'

const LoggerModal = () => {
  const dispatch = useAppDispatch()
  const { logArray, open } = useTypedSelector((state) => state.logger)

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open) {
        dispatch(closeLogger())
      }
    }

    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [dispatch, open])

  if (!open) return null

  return (
    <div className={backdrop} onClick={() => dispatch(closeLogger())}>
      <div className={modal} onClick={(event) => event.stopPropagation()}>
        <div className={header}>
          <div>
            <h2 className={heading}>활동 로그</h2>
            <p className={subtitle}>최근 작업을 시간 순으로 확인할 수 있어요.</p>
          </div>
          <div className={headerActions}>
            <button
              type="button"
              className={clearButton}
              onClick={() => dispatch(clearLogs())}
              disabled={logArray.length === 0}
            >
              전체 삭제
            </button>
            <button type="button" className={closeButton} onClick={() => dispatch(closeLogger())}>
              닫기
            </button>
          </div>
        </div>

        <div className={body}>
          {logArray.length === 0 && <p className={empty}>기록이 없습니다. 작업을 추가해보세요.</p>}
          {logArray.map((log) => (
            <LogItem key={log.logId} log={log} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default LoggerModal
