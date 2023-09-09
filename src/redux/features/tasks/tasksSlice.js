import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tast:[],
}

const tasksSlice = createSlice({
    name: 'tasksSlice',
    initialState,
    reduchers:{}
})

export default tasksSlice