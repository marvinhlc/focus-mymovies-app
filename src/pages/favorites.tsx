import React, { useEffect, useState } from "react";
import './home.css'
import {Box} from "@mui/material";
import { useAppSelector } from "../store/store";
import Topbar from "../components/Topbar";
import { useAppDispatch } from '../store/store';
import { selectFavoritesMovies, loadFromLocalStorage } from "../reducers/favorites";
import MoviesFavorites from "../components/MoviesFavorites";
import {Movies as MoviesType} from "../types/Movies";
import { selectToken} from "../reducers/user";

export const Favorites: React.FC = () => {
    const [movies,setMovies] = useState<MoviesType[]>([]);
    const dispatch = useAppDispatch()
    const favorites = useAppSelector(selectFavoritesMovies);
    const token = useAppSelector(selectToken);

    useEffect(() => {
        //dispatch(getAllFavorites());
        dispatch(loadFromLocalStorage())
        console.log('favorites->',favorites.list)
        console.log('token->',token)
        //setMovies(favorites.list)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    useEffect(() => {
        console.log('favorites->',favorites)
        setMovies(favorites.list)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[favorites])

    return (
        <Box className="ContenedorHome">
            <Topbar />
            <div className="Workzone">
                <MoviesFavorites movies={movies} />
            </div>
        </Box>
    );
};

export default Favorites;