import { useEffect } from 'react'
import { useAppDispatch, useTypedSelector } from '@/hooks/redux'
import { closeModal } from '@/store/slices/modalSlice'
import { backdrop, modal, header, title, subtitle, body, actions, closeButton } from './TaskModal.css'

const TaskModal = () => {
  const dispatch = useAppDispatch()
  const { open, task, boardId, listId } = useTypedSelector((state) => state.modal)
  const { boards } = useTypedSelector((state) => state.boards)

  const board = boards.find((item) => item.boardId === boardId)
  const list = board?.lists.find((item) => item.listId === listId)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open) {
        dispatch(closeModal())
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [dispatch, open])

  if (!open || !task) return null

  const meta = [board?.boardName, list?.listName].filter(Boolean).join(' • ')

  return (
    <div className={backdrop} onClick={() => dispatch(closeModal())}>
      <div className={modal} onClick={(event) => event.stopPropagation()}>
        <div className={header}>
          <div>
            <h2 className={title}>{task.taskName}</h2>
            {meta && <p className={subtitle}>{meta}</p>}
          </div>
        </div>
        {task.taskDescription && <p className={body}>{task.taskDescription}</p>}
        {!task.taskDescription && <p className={body}>설명이 없습니다.</p>}
        <div className={actions}>
          <button type="button" className={closeButton} onClick={() => dispatch(closeModal())}>
            닫기
          </button>
        </div>
      </div>
    </div>
  )
}

export default TaskModal
