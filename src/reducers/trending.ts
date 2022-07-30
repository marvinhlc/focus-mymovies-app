import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { Movies as MoviesType } from "../types/Movies";

const API_KEY = "67827dade2847df4df3fa8f7f2a00f55"
const url:string = `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`;

export interface MoviesState {
    list:MoviesType[]
}

const initialState = () => ({
    movies: {
        list:[]
    }
})

export const getTrendingMovies = createAsyncThunk(
    "trending/getTrendingMovies",
    async () => {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
);

export const trendingSlice = createSlice({
    name:"trending",
    initialState: initialState().movies as MoviesState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(getTrendingMovies.pending, (state,action) => {
            state.list = [];
        });
        builder.addCase(getTrendingMovies.fulfilled, (state,action) => {
            const {results} = action.payload;
            state.list = results;
        });
        builder.addCase(getTrendingMovies.rejected, (state,action) => {
            state.list = [];
        });
    }
});

export const selectMoviesTrending = (state:RootState) => state.trending;
export default trendingSlice.reducer;