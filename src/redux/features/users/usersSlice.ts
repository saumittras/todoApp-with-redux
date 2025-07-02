import type { IUser } from "@/type";
import { createSlice } from "@reduxjs/toolkit";

interface UsersState {
  users: IUser[];
}

const initialState: UsersState = {
  users: [],
};
export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});
