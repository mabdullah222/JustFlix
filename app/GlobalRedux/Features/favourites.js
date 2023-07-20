import { createSlice } from "@reduxjs/toolkit";

export const favouriteSlice=createSlice({
    name:"favourites",
    initialState:{value:[]},
    reducers:{
        setFavourites:(state,action)=>{
            state.value=action.payload
        },
        filterList:(state,action)=>{
            state.value=state.value.filter(e=>e.id!=action.payload.id)
        },
        addFavourite:(state,action)=>{
            state.value.push(action.payload)
        }
    }
})

export const {setFavourites,filterList,addFavourite}=favouriteSlice.actions;
export default favouriteSlice.reducer;