import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { User as UserType } from "../types/User";

export const TOKEN_MOVIES = "tokenMyMovies";
const url:string = "https://reqres.in/api/login";

export interface TokenState {
    valor:String;
}

const initialState = () => ({
    token: {valor:localStorage.getItem(TOKEN_MOVIES)}
})

export const getSessionToken = createAsyncThunk(
    "token/getSessionToken",
    async (user:UserType) => {
        const payload = {
            email:user.email,
            password:user.password
        };
        const config = {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(payload)
        };
        const response = await fetch(url,config);
        const data = await response.json();
        return data;
    }
);

export const userSlice = createSlice({
    name:"token",
    initialState: initialState().token as TokenState,
    reducers:{
        removeToken: (state) => {
            console.log('remove...')
            localStorage.removeItem(TOKEN_MOVIES);
            state.valor = "";
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getSessionToken.pending, (state,action) => {
            state.valor = "";
        });
        builder.addCase(getSessionToken.fulfilled, (state,action) => {
            const {token,error} = action.payload;
            if(error === 'user not found')
                state.valor = '';
            else{
                state.valor = token;
                localStorage.setItem(TOKEN_MOVIES,token);
            }
        });
        builder.addCase(getSessionToken.rejected, (state,action) => {
            state.valor = "";
        });
    }
});

export const {removeToken} = userSlice.actions;
export const selectToken = (state:RootState) => state.token;
export default userSlice.reducer;