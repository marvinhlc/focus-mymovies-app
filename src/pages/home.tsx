import React, { useEffect, useState } from "react";
import {Box,Typography} from "@mui/material";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../store/store";
import { selectUser } from "../reducers/user";
import Login from "../components/Login";

export const Home: React.FC = () => {
    const [tokenSession,setTokenSession] = useState<null | string>(null);
    const dispatch = useDispatch();
    const token = useAppSelector(selectUser);

    useEffect(() => {
        console.log('token->',token)
    },[]);

    const handleOnLogin = () => {
        console.log('login...')
    }

    if(token.valor === ''){
        return (
            <Login onLogin={handleOnLogin} />
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