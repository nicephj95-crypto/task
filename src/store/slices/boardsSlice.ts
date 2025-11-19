import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit'
import { IBoard, IList, ITask } from '@/types'

interface BoardsState {
  boards: IBoard[]
  activeBoardId: string | null
}

const initialBoards: IBoard[] = [
  {
    boardId: 'board-0',
    boardName: '첫 번째 보드',
    lists: [
      {
        listId: 'list-0',
        listName: '시작하기',
        tasks: [
          {
            taskId: 'task-0',
            taskName: '보드를 둘러보세요',
            taskDescription: '샘플 리스트와 카드를 만들었습니다.',
          },
          {
            taskId: 'task-1',
            taskName: '새 리스트를 추가해보세요',
            taskDescription: '오른쪽 버튼을 눌러 새 리스트를 생성할 수 있습니다.',
          },
        ],
      },
      {
        listId: 'list-1',
        listName: '진행 중',
        tasks: [
          {
            taskId: 'task-2',
            taskName: '목표를 적어보세요',
            taskDescription: '무엇을 해야 할지 적어두면 좋아요.',
          },
        ],
      },
    ],
  },
  {
    boardId: 'board-1',
    boardName: '두 번째 보드',
    lists: [
      {
        listId: 'list-2',
        listName: '아이디어',
        tasks: [
          {
            taskId: 'task-3',
            taskName: '새로운 기능 정리',
            taskDescription: '생각나는 아이디어를 자유롭게 적어보세요.',
          },
        ],
      },
    ],
  },
]

const initialState: BoardsState = {
  boards: initialBoards,
  activeBoardId: initialBoards[0]?.boardId ?? null,
}

const boardsSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {
    selectBoard(state, action: PayloadAction<string>) {
      state.activeBoardId = action.payload
    },
    addBoard(state, action: PayloadAction<string>) {
      const trimmed = action.payload.trim()
      if (!trimmed) return
      const newBoard: IBoard = {
        boardId: `board-${nanoid()}`,
        boardName: trimmed,
        lists: [],
      }
      state.boards.push(newBoard)
      state.activeBoardId = newBoard.boardId
    },
    addList(state, action: PayloadAction<{ boardId: string; listName: string }>) {
      const trimmed = action.payload.listName.trim()
      if (!trimmed) return
      const board = state.boards.find((b) => b.boardId === action.payload.boardId)
      if (!board) return
      const newList: IList = {
        listId: `list-${nanoid()}`,
        listName: trimmed,
        tasks: [],
      }
      board.lists.push(newList)
    },
    addTask(
      state,
      action: PayloadAction<{ boardId: string; listId: string; taskName: string }>,
    ) {
      const trimmed = action.payload.taskName.trim()
      if (!trimmed) return
      const board = state.boards.find((b) => b.boardId === action.payload.boardId)
      const list = board?.lists.find((l) => l.listId === action.payload.listId)
      if (!list) return
      const newTask: ITask = {
        taskId: `task-${nanoid()}`,
        taskName: trimmed,
      }
      list.tasks.push(newTask)
    },
    updateTask(
      state,
      action: PayloadAction<{
        boardId: string
        listId: string
        taskId: string
        updates: Partial<ITask>
      }>,
    ) {
      const board = state.boards.find((b) => b.boardId === action.payload.boardId)
      const list = board?.lists.find((l) => l.listId === action.payload.listId)
      const task = list?.tasks.find((t) => t.taskId === action.payload.taskId)
      if (!task) return

      const nextName = action.payload.updates.taskName?.trim()
      if (nextName === '') return

      if (nextName) {
        task.taskName = nextName
      }

      if (action.payload.updates.taskDescription !== undefined) {
        task.taskDescription = action.payload.updates.taskDescription?.trim()
      }

      if (action.payload.updates.taskOwner !== undefined) {
        task.taskOwner = action.payload.updates.taskOwner?.trim() || undefined
      }
    },
    deleteBoard(state, action: PayloadAction<string>) {
      const index = state.boards.findIndex((board) => board.boardId === action.payload)
      if (index === -1) return

      state.boards.splice(index, 1)

      if (state.activeBoardId === action.payload) {
        state.activeBoardId = state.boards[0]?.boardId ?? null
      }
    },
  },
})

export const { addBoard, selectBoard, addList, addTask, updateTask, deleteBoard } = boardsSlice.actions
export const boardsReducer = boardsSlice.reducer
