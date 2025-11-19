import clsx from 'clsx'
import { nanoid } from '@reduxjs/toolkit'
import SideForm from './SideForm/SideForm'
import { useAppDispatch, useTypedSelector } from '@/hooks/redux'
import { addBoard, deleteBoard, selectBoard } from '@/store/slices/boardsSlice'
import { closeModal } from '@/store/slices/modalSlice'
import { addLog } from '@/store/slices/loggerSlice'
import { boardCard, boardList, boardItem, activeBoard, header, title, actions, boardRow, deleteButton } from './BoardList.css'

const BoardList = () => {
  const dispatch = useAppDispatch()
  const { boards, activeBoardId } = useTypedSelector((state) => state.boards)

  const handleSubmit = (value: string) => {
    const trimmed = value.trim()
    if (!trimmed) return

    dispatch(addBoard(trimmed))
    dispatch(
      addLog({
        logId: nanoid(),
        logAuthor: '시스템',
        logMessage: `'${trimmed}' 보드를 생성했습니다.`,
        logTimestamp: Date.now(),
      }),
    )
  }

  const handleDelete = (boardId: string, boardName: string) => {
    dispatch(deleteBoard(boardId))
    dispatch(closeModal())
    dispatch(
      addLog({
        logId: nanoid(),
        logAuthor: '시스템',
        logMessage: `'${boardName}' 보드를 삭제했습니다.`,
        logTimestamp: Date.now(),
      }),
    )
  }

  return (
    <div className={boardCard}>
      <div className={header}>
        <h2 className={title}>Boards</h2>
        <div className={actions}>
          <SideForm onSubmit={handleSubmit} />
        </div>
      </div>
      <div className={boardList}>
        {boards.map((board) => (
          <div className={boardRow} key={board.boardId}>
            <button
              className={clsx(boardItem, board.boardId === activeBoardId && activeBoard)}
              onClick={() => dispatch(selectBoard(board.boardId))}
            >
              {board.boardName}
            </button>
            <button
              type="button"
              className={deleteButton}
              onClick={() => handleDelete(board.boardId, board.boardName)}
            >
              삭제
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BoardList
