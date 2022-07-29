import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { User as UserType } from "../types/User";

const url:string = "https://reqres.in/api/login";
const initialState = () => ({
    token: {valor:""}
})

export interface TokenState {
    valor:String;
}

export const getSessionToken = createAsyncThunk(
    "token/getSessionToken",
    async (user:UserType) => {
        //console.log('user-from->',user);
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
        //console.log('response->',data)
        return data;
    }
);

export const userSlice = createSlice({
    name:"token",
    initialState: initialState().token as TokenState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(getSessionToken.pending, (state,action) => {
            console.log('pending->',action.payload)
            state.valor = "";
        });
        builder.addCase(getSessionToken.fulfilled, (state,action) => {
            console.log('fulfilled->',action.payload)
            const {token,error} = action.payload;
            if(error === 'user not found')
                state.valor = '';
            else
                state.valor = token;
        });
        builder.addCase(getSessionToken.rejected, (state,action) => {
            console.log('rejected->',action.payload)
            state.valor = "";
        })
    }
});

export const selectUser = (state:RootState) => state.token;
export default userSlice.reducer;