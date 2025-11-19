import { useEffect } from 'react'
import { useAppDispatch, useTypedSelector } from '@/hooks/redux'
import ModalEdit from '../ModalEdit/ModalEdit'
import { startEdit, closeModal } from '@/store/slices/modalSlice'
import {
  backdrop,
  modal,
  header,
  title,
  subtitle,
  body,
  actions,
  closeButton,
  ghostButton,
  actionGroup,
} from './TaskModal.css'

const TaskModal = () => {
  const dispatch = useAppDispatch()
  const { open, task, boardId, listId, mode } = useTypedSelector((state) => state.modal)
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

  if (mode === 'edit') {
    return <ModalEdit />
  }

  const meta = [board?.boardName, list?.listName].filter(Boolean).join(' • ')
  const owner = task.taskOwner?.trim()

  return (
    <div className={backdrop} onClick={() => dispatch(closeModal())}>
      <div className={modal} onClick={(event) => event.stopPropagation()}>
        <div className={header}>
          <div>
            <h2 className={title}>{task.taskName}</h2>
            {meta && <p className={subtitle}>{meta}</p>}
            {owner && <p className={subtitle}>담당자: {owner}</p>}
          </div>
        </div>
        {task.taskDescription && <p className={body}>{task.taskDescription}</p>}
        {!task.taskDescription && <p className={body}>설명이 없습니다.</p>}
        <div className={actions}>
          <div className={actionGroup}>
            <button type="button" className={ghostButton} onClick={() => dispatch(startEdit())}>
              수정
            </button>
            <button type="button" className={closeButton} onClick={() => dispatch(closeModal())}>
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskModal
