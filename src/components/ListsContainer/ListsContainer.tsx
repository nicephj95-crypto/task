import { nanoid } from '@reduxjs/toolkit'
import ActionButton from '@/components/ActionButton/ActionButton'
import List from '@/components/List/List'
import { useAppDispatch, useTypedSelector } from '@/hooks/redux'
import { addList } from '@/store/slices/boardsSlice'
import { addLog, openLogger } from '@/store/slices/loggerSlice'
import { container, header, heading, listsRow, emptyText, logButton, headerActions } from './ListsContainer.css'

const ListsContainer = () => {
  const dispatch = useAppDispatch()
  const { boards, activeBoardId } = useTypedSelector((state) => state.boards)

  const activeBoard = boards.find((board) => board.boardId === activeBoardId)

  if (!activeBoard) {
    return <div className={emptyText}>생성된 보드가 없습니다.</div>
  }

  const handleAddList = (title: string) => {
    const trimmed = title.trim()
    if (!trimmed) return

    dispatch(addList({ boardId: activeBoard.boardId, listName: trimmed }))
    dispatch(
      addLog({
        logId: nanoid(),
        logAuthor: '시스템',
        logMessage: `'${trimmed}' 리스트를 추가했습니다.`,
        logTimestamp: Date.now(),
      }),
    )
  }

  return (
    <section className={container}>
      <div className={header}>
        <h1 className={heading}>{activeBoard.boardName}</h1>
        <div className={headerActions}>
          <button type="button" className={logButton} onClick={() => dispatch(openLogger())}>
            활동 로그
          </button>
          <ActionButton
            label="리스트 추가"
            placeholder="새 리스트 이름"
            buttonText="추가"
            onSubmit={handleAddList}
          />
        </div>
      </div>
      <div className={listsRow}>
        {activeBoard.lists.map((list) => (
          <List key={list.listId} list={list} boardId={activeBoard.boardId} />
        ))}
      </div>
    </section>
  )
}

export default ListsContainer
