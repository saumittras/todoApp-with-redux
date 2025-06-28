import type { ITask } from "@/type";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  tasks: ITask[];
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
      priority: "High",
    },
  ],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
});

export default taskSlice.reducer;
