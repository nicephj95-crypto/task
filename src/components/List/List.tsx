import { nanoid } from '@reduxjs/toolkit'
import ActionButton from '@/components/ActionButton/ActionButton'
import Task from '@/components/Task/Task'
import { IList } from '@/types'
import { useAppDispatch } from '@/hooks/redux'
import { addTask } from '@/store/slices/boardsSlice'
import { addLog } from '@/store/slices/loggerSlice'
import { card, header, title, tasksContainer } from './List.css'

type ListProps = {
  list: IList
  boardId: string
}

const List = ({ list, boardId }: ListProps) => {
  const dispatch = useAppDispatch()

  const handleAddTask = (value: string) => {
    const trimmed = value.trim()
    if (!trimmed) return

    dispatch(addTask({ boardId, listId: list.listId, taskName: trimmed }))
    dispatch(
      addLog({
        logId: nanoid(),
        logAuthor: '시스템',
        logMessage: `'${list.listName}' 리스트에 '${trimmed}' 카드를 추가했습니다.`,
        logTimestamp: Date.now(),
      }),
    )
  }

  return (
    <article className={card}>
      <div className={header}>
        <h3 className={title}>{list.listName}</h3>
      </div>
      <div className={tasksContainer}>
        {list.tasks.map((task) => (
          <Task key={task.taskId} task={task} boardId={boardId} listId={list.listId} />
        ))}
      </div>
      <ActionButton
        label="카드 추가"
        placeholder="새 카드 제목"
        buttonText="추가"
        variant="ghost"
        onSubmit={handleAddTask}
      />
    </article>
  )
}

export default List
