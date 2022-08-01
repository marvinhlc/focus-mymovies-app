import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { Movies as MoviesType } from "../types/Movies";
import {config} from '../config';

const API_KEY = config.API_KEY;
const urlbase:string = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=`;

export interface MoviesState {
    list:MoviesType[]
}

const initialState = () => ({
    search: {
        list:[]
    }
})

export const searchMovieByTitle = createAsyncThunk(
    "searching/searchMovieByTitle",
    async (query:string) => {
        const url = urlbase.concat(query);
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
);

export const searchSlice = createSlice({
    name:"searching",
    initialState: initialState().search as MoviesState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(searchMovieByTitle.pending, (state,action) => {
            state.list = [];
        });
        builder.addCase(searchMovieByTitle.fulfilled, (state,action) => {
            const {results} = action.payload;
            state.list = results;
        });
        builder.addCase(searchMovieByTitle.rejected, (state,action) => {
            state.list = [];
        });
    }
});

export const selectSearchingResults = (state:RootState) => state.search;
export default searchSlice.reducer;