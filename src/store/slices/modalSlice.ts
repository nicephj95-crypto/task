import {createSlice} from '@reduxjs/toolkit';

type TModalState = {
    boardId: string;
    listId: string;
    task: ITask;
    };


const initialState: TModalState= {
    boardId: "board-0",
    listId : "list-0",
    task : {
        taskId : "task-0",
        taskName : "Task 0",
        taskDescription : "This is task 0 description",
        taskOwner : "user-0"
    }
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {

    }
})

export const modalReducer = modalSlice.reducer;