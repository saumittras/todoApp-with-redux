import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import tasksReducer from "./features/task/taskSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: tasksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
