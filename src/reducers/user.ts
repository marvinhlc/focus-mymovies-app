import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { User } from "../types/User";

const url:string = "https://reqres.in/api/login";
const initialState = () => ({
    token: {valor:""}
})

export interface TokenState {
    valor:String;
}

export const getSessionToken = createAsyncThunk(
    "user/getSessionToken",
    async (user:User) => {
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
    name:"user",
    initialState: initialState().token as TokenState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(getSessionToken.fulfilled, (state,action) => {
            const {data} = action.payload;
            state.valor = data;
        })
    }
});

export const selectUser = (state:RootState) => state.token;
export default userSlice.reducer;