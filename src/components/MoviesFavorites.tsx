import { Box } from "@mui/material";
import React from "react";
import '../pages/home.css'
//import { selectMoviesTrending } from "../reducers/trending";
//import { useAppSelector } from "../store/store";
import {Movies as MoviesType} from "../types/Movies"
import MovieCard from "./MovieCard";

type Props = {
    movies:MoviesType[];
};

const MoviesFavorites:React.FC<Props> = ({movies}) => {
    

    const RenderMovies = movies.map((item) => {
        return <MovieCard item={item} />
    });

    return (
        <Box sx={{marginTop:2}}>
            { RenderMovies }
        </Box>
    )
}

export default MoviesFavorites;