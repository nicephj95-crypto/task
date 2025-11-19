import { ILogItem } from '@/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type LoggerState = {
  logArray: ILogItem[]
  open: boolean
}

const initialState: LoggerState = {
  logArray: [],
  open: false,
}

const loggerSlice = createSlice({
  name: 'logger',
  initialState,
  reducers: {
    addLog(state, action: PayloadAction<ILogItem>) {
      state.logArray.unshift(action.payload)
    },
    clearLogs(state) {
      state.logArray = []
    },
    openLogger(state) {
      state.open = true
    },
    closeLogger(state) {
      state.open = false
    },
  },
})

export const { addLog, clearLogs, openLogger, closeLogger } = loggerSlice.actions
export const loggerReducer = loggerSlice.reducer
