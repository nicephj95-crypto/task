import { IBoard } from '@/types';
import {createSlice} from '@reduxjs/toolkit';

type TBiardsState = {
    modalActive: boolean;
    boardArray: IBoard[]
}

const initialState: TBiardsState = {
    modalActive: false,
    boardArray: [
        {
            boardId: "board-0",
            boardName: "first",
            lists:[
                {
                    listId: "list-0",
                    listName: "Task 1",
                    taskDescription: "description",
                    taskOwner: "user-0",
                },
                {
                    listId: "list-1",
                    listName: "Task 2",
                    taskDescription: "description",
                    taskOwner: "user-1",
                }
            ]
        },
        {
            boardId: "board-1",
            boardName: "second",
            lists:[
                {
                    listId: "list-0",
                    listName: "Task 1",
                    taskDescription: "description",
                    taskOwner: "user-0",    
        }
    ]
};

const boardsSlice = createSlice({
  name: 'boards',
  initialState: {},
  reducers: {
    
  }
})

export const boardsReducer = boardsSlice.reducer;