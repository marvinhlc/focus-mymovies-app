import React, { useEffect, useState } from "react";
import {Box,Typography} from "@mui/material";
import { useAppSelector } from "../store/store";
import { selectToken, TOKEN_MOVIES} from "../reducers/user";
import Login from "../components/Login";

export const Home: React.FC = () => {
    const [tokenSession,setTokenSession] = useState<null | String>(null);
    const token = useAppSelector(selectToken);

    useEffect(() => {
        const tokenlocal = localStorage.getItem(TOKEN_MOVIES);
        setTokenSession(tokenlocal);
    },[]);

    useEffect(() => {
        console.log('token->',token)
        setTokenSession(token.valor);
        localStorage.setItem(TOKEN_MOVIES,token.valor.toString());
    },[token]);

    //Si el tokenSession esta vacio o indefinido llamamos a Login
    if(tokenSession === '' || tokenSession === undefined){
        return (
            <Login />
        )
    }

    return (
        <Box>
            <Typography variant="h5">
                HOME PAGE
            </Typography>
        </Box>
    );
};

export default Home;