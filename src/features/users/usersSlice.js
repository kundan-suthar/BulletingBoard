import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    { id: '0', name: 'dave' },
    { id: '1', name: 'Save' },
    { id: '2', name: 'tave' },
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

    }
})

export const selectAllUsers = (state) => state.users

export default usersSlice.reducer