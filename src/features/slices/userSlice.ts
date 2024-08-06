import { createSlice } from "@reduxjs/toolkit"
import { changeUserFetch, logInFetch, registerFetch } from "../actions/accountAction"
import type { User } from "../../utils/interfaces"

const UserSlice = createSlice({
  name: "user",
  initialState: {
    data: null as null | User,
    status: ""
  },
  reducers: {
    deleteUser(state) {
      state.data = null

    }
  },
  extraReducers: builder => {
    builder
      .addCase(registerFetch.pending, (state) => {
        state.status = "Pending..."
      })
      .addCase(registerFetch.fulfilled, (state, action) => {
        state.data = action.payload
        state.status = ""
      })
      .addCase(registerFetch.rejected, (state, action) => {
        state.status = "Error! " + action.error.message
      })
      .addCase(logInFetch.pending, (state) => {
        state.status = "Pending..."
      })
      .addCase(logInFetch.fulfilled, (state, action) => {
        state.status = ""
        state.data = action.payload
      })
      .addCase(logInFetch.rejected, (state, action) => {
        state.status = "Error! " + action.error.message
      })
      .addCase(changeUserFetch.pending, (state) => {
        state.status = "Pending..."
      })
      .addCase(changeUserFetch.fulfilled, (state, action) => {
        state.status = ""
        state.data = action.payload;
      })
      .addCase(changeUserFetch.rejected, (state, action) => {
        state.status = "Error! " + action.error.message
      })


  }
})
export const {deleteUser} = UserSlice.actions
export default UserSlice