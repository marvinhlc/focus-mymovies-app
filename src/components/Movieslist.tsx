import React from "react";
import '../pages/home.css'
import { selectMoviesTrending } from "../reducers/trending";
import { useAppSelector } from "../store/store";
import MovieCard from "./MovieCard";

function Movieslist(){
    const trending = useAppSelector(selectMoviesTrending);

    const RenderMovies = trending.list.map((item) => {
        return <MovieCard item={item} />
    });

    return (
        <div>
            { RenderMovies }
        </div>
    )
}

export default Movieslist;