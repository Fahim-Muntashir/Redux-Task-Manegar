import { configureStore } from "@reduxjs/toolkit";
import taskSlice from './features/tasks/tasksSlice'

const store = configureStore({
    reducer: {
        tasks: taskSlice,
    },
})


export default store;