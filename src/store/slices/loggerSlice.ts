import { ILogItem } from '@/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type LoggerState = {
  logArray: ILogItem[]
}

const initialState: LoggerState = {
  logArray: [],
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
  },
})

export const { addLog, clearLogs } = loggerSlice.actions
export const loggerReducer = loggerSlice.reducer
