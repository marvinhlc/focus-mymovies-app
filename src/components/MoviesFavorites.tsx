import React from "react";
import '../pages/home.css'
//import { selectMoviesTrending } from "../reducers/trending";
//import { useAppSelector } from "../store/store";
import MovieDetail from "./MovieDetail";
import {Movies as MoviesType} from "../types/Movies"

type Props = {
    movies:MoviesType[];
};

const MoviesFavorites:React.FC<Props> = ({movies}) => {
    

    const RenderMovies = movies.map((item) => {
        return <MovieDetail item={item} />
    });

    return (
        <div>
            { RenderMovies }
        </div>
    )
}

export default MoviesFavorites;