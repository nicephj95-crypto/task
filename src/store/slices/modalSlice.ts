import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ITask } from '@/types'

type TModalState = {
  boardId: string | null
  listId: string | null
  task: ITask | null
  open: boolean
  mode: 'view' | 'edit'
}

const initialState: TModalState = {
  boardId: null,
  listId: null,
  task: null,
  open: false,
  mode: 'view',
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state, action: PayloadAction<{ boardId: string; listId: string; task: ITask }>) {
      state.boardId = action.payload.boardId
      state.listId = action.payload.listId
      state.task = action.payload.task
      state.open = true
      state.mode = 'view'
    },
    startEdit(state) {
      if (!state.task) return
      state.mode = 'edit'
    },
    closeModal(state) {
      state.open = false
      state.boardId = null
      state.listId = null
      state.task = null
      state.mode = 'view'
    },
  },
})

export const { openModal, closeModal, startEdit } = modalSlice.actions
export const modalReducer = modalSlice.reducer
