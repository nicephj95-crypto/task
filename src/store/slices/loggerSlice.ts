import { ILogItem } from '@/types';
import {createSlice} from '@reduxjs/toolkit';

type loggerState = {
    logArray: ILogItem[]
}

const initialState: loggerState = {
    logArray: []
};

createSlice = createSlice({
  name: 'logger',
  initialState,
  reducers: {
    
  }
})

export const loggerSlice = loogerSlice.reducer;