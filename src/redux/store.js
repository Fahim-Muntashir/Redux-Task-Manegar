import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./features/tasks/tasksSlice";

const store = configureStore({
  reducer: {
    tasksSlice: taskSlice,
  },
});

export default store;
