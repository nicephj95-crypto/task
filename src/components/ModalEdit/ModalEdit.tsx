import { FormEvent, useEffect, useState } from 'react'
import { nanoid } from '@reduxjs/toolkit'
import { useAppDispatch, useTypedSelector } from '@/hooks/redux'
import { closeModal } from '@/store/slices/modalSlice'
import { updateTask } from '@/store/slices/boardsSlice'
import { addLog } from '@/store/slices/loggerSlice'
import {
  actions,
  backdrop,
  error,
  field,
  form,
  header,
  helper,
  input,
  label,
  modal,
  primaryButton,
  secondaryButton,
  textarea,
  title,
} from './ModalEdit.css'

const ModalEdit = () => {
  const dispatch = useAppDispatch()
  const { task, boardId, listId, open } = useTypedSelector((state) => state.modal)
  const [taskName, setTaskName] = useState(task?.taskName ?? '')
  const [taskDescription, setTaskDescription] = useState(task?.taskDescription ?? '')
  const [taskOwner, setTaskOwner] = useState(task?.taskOwner ?? '')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    setTaskName(task?.taskName ?? '')
    setTaskDescription(task?.taskDescription ?? '')
    setTaskOwner(task?.taskOwner ?? '')
  }, [task])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open) {
        dispatch(closeModal())
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [dispatch, open])

  if (!open || !task || !boardId || !listId) return null

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    const trimmedName = taskName.trim()
    const trimmedDescription = taskDescription.trim()

    if (!trimmedName) {
      setErrorMessage('카드 제목을 입력해주세요.')
      return
    }

    dispatch(
      updateTask({
        boardId,
        listId,
        taskId: task.taskId,
        updates: {
          taskName: trimmedName,
          taskDescription: trimmedDescription === '' ? '' : trimmedDescription,
          taskOwner,
        },
      }),
    )

    dispatch(
      addLog({
        logId: nanoid(),
        logAuthor: taskOwner?.trim() || '시스템',
        logMessage: `'${trimmedName}' 카드 정보를 수정했습니다.`,
        logTimestamp: Date.now(),
      }),
    )

    dispatch(closeModal())
  }

  return (
    <div className={backdrop} onClick={() => dispatch(closeModal())}>
      <div className={modal} onClick={(event) => event.stopPropagation()}>
        <div className={header}>
          <h2 className={title}>카드 수정</h2>
        </div>
        <form className={form} onSubmit={handleSubmit}>
          <div className={field}>
            <label className={label} htmlFor="task-name">
              카드 제목
            </label>
            <input
              id="task-name"
              className={input}
              value={taskName}
              onChange={(event) => {
                setTaskName(event.target.value)
                setErrorMessage('')
              }}
              placeholder="카드 제목을 입력하세요"
            />
            {errorMessage && <p className={error}>{errorMessage}</p>}
          </div>

          <div className={field}>
            <label className={label} htmlFor="task-owner">
              담당자
            </label>
            <input
              id="task-owner"
              className={input}
              value={taskOwner}
              onChange={(event) => setTaskOwner(event.target.value)}
              placeholder="담당자 이름 (선택)"
            />
            <p className={helper}>담당자를 비워두면 시스템 로그로 기록됩니다.</p>
          </div>

          <div className={field}>
            <label className={label} htmlFor="task-desc">
              설명
            </label>
            <textarea
              id="task-desc"
              className={textarea}
              value={taskDescription}
              onChange={(event) => setTaskDescription(event.target.value)}
              placeholder="상세 내용을 입력하세요"
            />
          </div>

          <div className={actions}>
            <button type="button" className={secondaryButton} onClick={() => dispatch(closeModal())}>
              취소
            </button>
            <button type="submit" className={primaryButton}>
              저장
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ModalEdit
