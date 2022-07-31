import React, { useEffect, useState } from "react";
import './home.css'
import {Box} from "@mui/material";
import { useAppSelector } from "../store/store";
import { selectToken} from "../reducers/user";
import Login from "../components/Login";
import Topbar from "../components/Topbar";
import { getTrendingMovies, selectMoviesTrending } from "../reducers/trending";
import { useAppDispatch } from '../store/store';
import Movieslist from "../components/Movieslist";
import { selectFavoritesMovies } from "../reducers/favorites";
import { selectMovieSelected } from "../reducers/details";

export const Home: React.FC = () => {
    const [tokenSession,setTokenSession] = useState<null | String>(null);

    const dispatch = useAppDispatch();
    const token = useAppSelector(selectToken);
    const trending = useAppSelector(selectMoviesTrending);
    const favorites = useAppSelector(selectFavoritesMovies);
    const movie = useAppSelector(selectMovieSelected);

    useEffect(() => {
        dispatch(getTrendingMovies());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    useEffect(() => {
        setTokenSession(token.valor);
        //console.log('trending->',trending)
        //console.log('favorites->',favorites)
        console.log('selected->',movie.selected)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[trending,favorites,movie]);

    //Si el tokenSession esta vacio o indefinido llamamos a Login
    if(tokenSession === '' || tokenSession === undefined || tokenSession === null){
        return (
            <Box className="ContenedorLogin">
                <Login />
            </Box>
        )
    }

    return (
        <Box>
            <Topbar />
            <div className="Contenedor">
                <Movieslist />
            </div>
        </Box>
    );
};

export default Home;