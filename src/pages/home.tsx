import React, { useEffect, useState } from "react";
import './home.css'
import {Box} from "@mui/material";
import { useAppSelector } from "../store/store";
import { selectToken} from "../reducers/user";
import Login from "../components/Login";
import Topbar from "../components/Topbar";
import { getTrendingMovies, selectMoviesTrending } from "../reducers/trending";
import { useAppDispatch } from '../store/store';

export const Home: React.FC = () => {
    const [tokenSession,setTokenSession] = useState<null | String>(null);
    //const [moviesTrending,setMoviesTrending] = useState<Movies>();

    const dispatch = useAppDispatch();
    const token = useAppSelector(selectToken);
    const trending = useAppSelector(selectMoviesTrending);

    useEffect(() => {
        dispatch(getTrendingMovies());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    useEffect(() => {
        setTokenSession(token.valor);
        console.log('trending-session->',trending)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[trending]);

    //Si el tokenSession esta vacio o indefinido llamamos a Login
    if(tokenSession === '' || tokenSession === undefined || tokenSession === null){
        return (
            <Box className="ContenedorLogin">
                <Login />
            </Box>
        )
    }

    return (
        <Box className="ContenedorHome">
            <Topbar />
        </Box>
    );
};

export default Home;