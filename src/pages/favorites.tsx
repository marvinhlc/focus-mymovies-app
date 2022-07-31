import React, { useEffect, useState } from "react";
import './home.css'
import {Box} from "@mui/material";
import { useAppSelector } from "../store/store";
import Topbar from "../components/Topbar";
import { useAppDispatch } from '../store/store';
import { selectFavoritesMovies, loadFromLocalStorage, addToFavorites, removeFromFavorites } from "../reducers/favorites";
import {Movies as MoviesType} from "../types/Movies";
import { selectToken} from "../reducers/user";
import MovieCard from "../components/MovieCard";
import Movieslist from "../components/Movieslist";

export const Favorites: React.FC = () => {
    const dispatch = useAppDispatch()
    const favorites = useAppSelector(selectFavoritesMovies);
    const token = useAppSelector(selectToken);

    useEffect(() => {
        dispatch(loadFromLocalStorage())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return (
        <Box>
            <Topbar />
            <div className="Contenedor">
                <Movieslist origen="favorites" />
            </div>
        </Box>
    );
};

export default Favorites;