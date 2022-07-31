import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import {Movies as MoviesType} from "../types/Movies";
import {Cast as CastType} from "../types/Cast";

const API_KEY = "67827dade2847df4df3fa8f7f2a00f55";

export interface CastState {
    list:CastType[]
}

const initialState = () => ({
    cast: {
        list: []
    }
});

export const getCreditsMovie = createAsyncThunk(
    "cast/getCreditsMovie",
    async (movie:MoviesType) => {
        const url:string = `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${API_KEY}&append_to_response=credits`;
        const response = await fetch(url);
        const data = await response.json();
        const {credits} = data
        const {cast} = credits
        return cast;
    }
);

export const creditSlice = createSlice({
    name:"credits",
    initialState: initialState().cast as CastState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(getCreditsMovie.pending, (state,action) => {
            state.list = [];
        });
        builder.addCase(getCreditsMovie.fulfilled, (state,action) => {
            state.list = action.payload;
        });
        builder.addCase(getCreditsMovie.rejected, (state,action) => {
            state.list = [];
        });
    }        
});

//export const {addAsSelected} = creditSlice.actions;
export const selectCreditsMovie = (state:RootState) => state.credits;
export default creditSlice.reducer;