import { ITask } from '@/types'
import { useAppDispatch } from '@/hooks/redux'
import { openModal } from '@/store/slices/modalSlice'
import { card, title, description } from './Task.css'

type TaskProps = {
  task: ITask
  boardId: string
  listId: string
}

const Task = ({ task, boardId, listId }: TaskProps) => {
  const dispatch = useAppDispatch()

  const handleOpenModal = () => {
    dispatch(openModal({ boardId, listId, task }))
  }

  return (
    <button type="button" className={card} onClick={handleOpenModal}>
      <div className={title}>{task.taskName}</div>
      {task.taskDescription && <div className={description}>{task.taskDescription}</div>}
    </button>
  )
}

export default Task
