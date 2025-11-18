import ActionButton from '@/components/ActionButton/ActionButton'
import List from '@/components/List/List'
import { useAppDispatch, useTypedSelector } from '@/hooks/redux'
import { addList } from '@/store/slices/boardsSlice'
import { container, header, heading, listsRow, emptyText } from './ListsContainer.css'

const ListsContainer = () => {
  const dispatch = useAppDispatch()
  const { boards, activeBoardId } = useTypedSelector((state) => state.boards)

  const activeBoard = boards.find((board) => board.boardId === activeBoardId)

  if (!activeBoard) {
    return <div className={emptyText}>생성된 보드가 없습니다.</div>
  }

  const handleAddList = (title: string) => {
    dispatch(addList({ boardId: activeBoard.boardId, listName: title }))
  }

  return (
    <section className={container}>
      <div className={header}>
        <h1 className={heading}>{activeBoard.boardName}</h1>
        <ActionButton
          label="리스트 추가"
          placeholder="새 리스트 이름"
          buttonText="추가"
          onSubmit={handleAddList}
        />
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
