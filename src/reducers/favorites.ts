import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { Movies as MoviesType } from "../types/Movies";

export interface FavoritesState {
    list:MoviesType[]
}

const initialState = () => ({
    favorites: {
        list:[]
    }
});

export const favoritesSlice = createSlice({
    name:"favorites",
    initialState: initialState().favorites as FavoritesState,
    reducers:{
        addToFavorites: (state, action:PayloadAction<MoviesType>) => {
            let tempo = [...state.list, action.payload];
            state.list = tempo;
        }
    },
});

export const {addToFavorites} = favoritesSlice.actions;
export const selectFavoritesMovies = (state:RootState) => state.favorites;
export default favoritesSlice.reducer;