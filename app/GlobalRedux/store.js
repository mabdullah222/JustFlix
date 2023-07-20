'use client';
import { configureStore } from "@reduxjs/toolkit";
import { favouriteSlice } from "./Features/favourites";
import { userSlice } from "./Features/currentUser";

export const store= configureStore({
    reducer:{
        favourites:favouriteSlice.reducer,
        currentUser:userSlice.reducer
    }
});

