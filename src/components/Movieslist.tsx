import React from "react";
import '../pages/home.css'
import { selectMoviesTrending } from "../reducers/trending";
import { useAppSelector } from "../store/store";
import MovieDetail from "./MovieDetail";

function Movieslist(){
    const trending = useAppSelector(selectMoviesTrending);

    const RenderMovies = trending.list.map((item) => {
        return <MovieDetail item={item} />
    });

    return (
        <div>
            { RenderMovies }
        </div>
    )
}

export default Movieslist;