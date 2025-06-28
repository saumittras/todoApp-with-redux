import type { RootState } from "@/redux/store";
import type { ITask } from "@/type";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  tasks: ITask[];
  filter: "all" | "High" | "Medium" | "Low";
}
const initialState: InitialState = {
  tasks: [
    {
      id: "1",
      title: "Initialize frontend",
      description: "Create Home Page abd routing",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "High",
    },
    {
      id: "2",
      title: "Create Backend",
      description: "Create Home Page abd routing",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "Medium",
    },
    {
      id: "3",
      title: "Create a Backend",
      description: "Create Home Page abd routing",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "High",
    },
    {
      id: "4",
      title: "Create a Hijibiji",
      description: "Create Home Page abd routing",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "Low",
    },
  ],
  filter: "all",
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
});

export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
};
export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export default taskSlice.reducer;
