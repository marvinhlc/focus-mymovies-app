import { addAsSelected } from "../reducers/details"
import { useAppDispatch, useAppSelector } from '../store/store';
import { selectMovieSelected } from "../reducers/details";
import MovieDetail from "../components/MovieDetail";
import Topbar from "../components/Topbar";
import {Box} from "@mui/material";

export const Details: React.FC = () => {
    const dispatch = useAppDispatch()
    const movie = useAppSelector(selectMovieSelected);

    console.log('selected->',movie.selected)

    return (
        <Box className="ContenedorHome">
            <Topbar />
            <div className="Workzone">
                <MovieDetail item={movie.selected} />
            </div>
        </Box>
    );
}

export default Details