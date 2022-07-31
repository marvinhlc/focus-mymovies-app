import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { Movies as MoviesType } from "../types/Movies";

export interface DetailState {
    selected:MoviesType
}

const initialState = () => ({
    movie: {
        selected: {}
    }
});

export const detailSlice = createSlice({
    name:"details",
    initialState: initialState().movie as DetailState,
    reducers:{
        addAsSelected: (state, action:PayloadAction<MoviesType>) => {
            state.selected = action.payload;
        },
    },
});

export const {addAsSelected} = detailSlice.actions;
export const selectMovieSelected = (state:RootState) => state.movie;
export default detailSlice.reducer;