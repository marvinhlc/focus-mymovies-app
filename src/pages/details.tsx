import { useAppDispatch, useAppSelector } from '../store/store';
import { selectMovieSelected } from "../reducers/details";
import MovieDetail from "../components/MovieDetail";
import {Box} from "@mui/material";

export const Details: React.FC = () => {
    const dispatch = useAppDispatch()
    const movie = useAppSelector(selectMovieSelected);

    return (
        <Box className="ContenedorDetails">
            <div className="Workzone2">
                <MovieDetail item={movie.selected} />
            </div>
        </Box>
    );
}

export default Details