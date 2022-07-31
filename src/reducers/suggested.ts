import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import {Movies as MoviesType} from "../types/Movies";
import {Suggested as SuggestedType} from "../types/Suggested";

const API_KEY = "67827dade2847df4df3fa8f7f2a00f55";

export interface SuggestedState {
    list:SuggestedType[]
}

const initialState = () => ({
    suggested: {
        list: []
    }
});

export const getSuggestedMovies = createAsyncThunk(
    "suggested/getSuggestedMovies",
    async (movie:SuggestedType) => {
        const url:string = `https://api.themoviedb.org/3/movie/${movie.id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`;
        const response = await fetch(url);
        const {results} = await response.json();
        return results;
    }
);

export const creditSlice = createSlice({
    name:"suggested",
    initialState: initialState().suggested as SuggestedState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(getSuggestedMovies.pending, (state,action) => {
            state.list = [];
        });
        builder.addCase(getSuggestedMovies.fulfilled, (state,action) => {
            state.list = action.payload;
        });
        builder.addCase(getSuggestedMovies.rejected, (state,action) => {
            state.list = [];
        });
    }        
});

//export const {addAsSelected} = creditSlice.actions;
export const selectSuggestedMovies = (state:RootState) => state.suggested;
export default creditSlice.reducer;