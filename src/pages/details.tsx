import { useAppDispatch, useAppSelector } from '../store/store';
import { selectMovieSelected } from "../reducers/details";
import MovieDetail from "../components/MovieDetail";
import {Box} from "@mui/material";
import Topbar from '../components/Topbar';

export const Details: React.FC = () => {
    const movie = useAppSelector(selectMovieSelected);

    return (
        <Box>
            <Topbar />
            <div className="Contenedor">
                <MovieDetail item={movie.selected} />
            </div>
        </Box>
    );
}

export default Details