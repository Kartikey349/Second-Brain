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
        },
        removeContent: (state, action)=> {
            state.all = state.all.filter((item: any) => item._id !== action.payload )
            state.filtered = state.filtered.filter((item: any) => item._id !== action.payload);
        }
    }
})

export const {addContent, filterContent, removeContent} = contentSlice.actions
export default contentSlice.reducer