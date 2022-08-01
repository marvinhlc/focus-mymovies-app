import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { Movies as MoviesType } from "../types/Movies";
import {config} from '../config'

export const FAVORITES_MOVIES = config.FAVORITES_MOVIES;

export interface FavoritesState {
    list:MoviesType[]
}

const initialState = () => ({
    favorites: {
        list: []
    }
});

export const loadFromLocalStorage = createAsyncThunk(
    "favorites/loadFromLocalStorage",
    async () => {
        var datos  = await localStorage.getItem(FAVORITES_MOVIES) || []
        let data: MoviesType[] = await JSON.parse(datos.toString())
        return data;
    }
);

export const favoritesSlice = createSlice({
    name:"favorites",
    initialState: initialState().favorites as FavoritesState,
    reducers:{
        addToFavorites: (state, action:PayloadAction<MoviesType>) => {
            let tempo = [...state.list, action.payload];
            state.list = tempo;
            localStorage.setItem(FAVORITES_MOVIES, JSON.stringify(state.list))
        },
        removeFromFavorites: (state, action:PayloadAction<MoviesType>) => {
            let tempo = state.list.filter((reg) => {
                if(reg.id !== action.payload.id){
                     return reg;
                }
            })
            localStorage.setItem(FAVORITES_MOVIES, JSON.stringify(tempo))
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loadFromLocalStorage.pending, (state,action) => {
            state.list = [];
        });
        builder.addCase(loadFromLocalStorage.fulfilled, (state,action) => {
            state.list = action.payload;
        });
        builder.addCase(loadFromLocalStorage.rejected, (state,action) => {
            state.list = [];
        });
    }    
});

export const {addToFavorites,removeFromFavorites} = favoritesSlice.actions;
export const selectFavoritesMovies = (state:RootState) => state.favorites;
export default favoritesSlice.reducer;