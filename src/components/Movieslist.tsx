import { Box } from "@mui/material";
import React from "react";
import '../pages/home.css'
import { selectMoviesTrending } from "../reducers/trending";
import { useAppDispatch, useAppSelector } from "../store/store";
import MovieCard from "./MovieCard";
import { selectFavoritesMovies, loadFromLocalStorage, addToFavorites, removeFromFavorites } from "../reducers/favorites";
import {Movies as MoviesType} from "../types/Movies";

type Props = {
    origen:'trending' | 'favorites'
};

const Movieslist:React.FC<Props> = ({origen}) => {
    const favorites = useAppSelector(selectFavoritesMovies);
    const trending = useAppSelector(selectMoviesTrending);
    const dispatch = useAppDispatch()

    const handleOnAddToFavorites = (item:MoviesType) => {
        dispatch(addToFavorites(item))
        dispatch(loadFromLocalStorage())
    }

    const handleOnRemoveFromFavorites = (item:MoviesType) => {
        dispatch(removeFromFavorites(item))
        dispatch(loadFromLocalStorage())
    }

    const RenderMoviesTrending = trending.list.map((item) => {
        return <MovieCard 
                item={item} 
                onAddToFavorites={() => handleOnAddToFavorites(item)}
                onRemoveFromFavorites={() => handleOnRemoveFromFavorites(item)}
                />
    });

    const RenderMoviesFavorites = favorites.list.map((item) => {
        return <MovieCard 
                item={item} 
                onAddToFavorites={() => handleOnAddToFavorites(item)}
                onRemoveFromFavorites={() => handleOnRemoveFromFavorites(item)}
                />
    });    

    return (
        <Box sx={{marginTop:2}}>
            {origen === 'trending' 
            ?RenderMoviesTrending 
            :RenderMoviesFavorites
            }
        </Box>
    )
}

export default Movieslist;