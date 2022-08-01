import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

export interface QueryState {
    valor:String;
}

const initialState = () => ({
    query: {valor:''}
})

export const userSlice = createSlice({
    name:"query",
    initialState: initialState().query as QueryState,
    reducers:{
        saveQueryString: (state, action) => {
            console.log('save query string...')
            state.valor = action.payload;
        },
    },
});

export const {saveQueryString} = userSlice.actions;
export const selectQueryString = (state:RootState) => state.query;
export default userSlice.reducer;