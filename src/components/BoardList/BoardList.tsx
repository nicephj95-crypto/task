import clsx from 'clsx'
import SideForm from './SideForm/SideForm'
import { useAppDispatch, useTypedSelector } from '@/hooks/redux'
import { addBoard, selectBoard } from '@/store/slices/boardsSlice'
import { boardCard, boardList, boardItem, activeBoard, header, title, actions } from './BoardList.css'

const BoardList = () => {
  const dispatch = useAppDispatch()
  const { boards, activeBoardId } = useTypedSelector((state) => state.boards)

  const handleSubmit = (value: string) => {
    dispatch(addBoard(value))
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
          <button
            key={board.boardId}
            className={clsx(boardItem, board.boardId === activeBoardId && activeBoard)}
            onClick={() => dispatch(selectBoard(board.boardId))}
          >
            {board.boardName}
          </button>
        ))}
      </div>
    </div>
  )
}

export default BoardList
