import { createSlice } from "@reduxjs/toolkit";

const contentSlice = createSlice({
    name: "content",
    initialState: {
        all: [],
        filtered: [],
    },
    reducers:{
        addContent: (state, action) => {
            state.all = action.payload
            state.filtered = action.payload
        },
        filterContent: (state, action) => {
            if(action.payload === "all"){
                state.filtered = state.all
            }else{
                state.filtered = state.all.filter((item : any) => item.type === action.payload)
            }
        }
    }
})

export const {addContent, filterContent} = contentSlice.actions
export default contentSlice.reducer