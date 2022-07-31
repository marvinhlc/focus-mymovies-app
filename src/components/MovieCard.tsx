import React from "react";
import {Movies as MoviesType} from "../types/Movies"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/material";
//import { useAppDispatch } from '../store/store';
//import {addToFavorites} from "../reducers/favorites";
import { useDispatch } from "react-redux";
//import { useAppSelector } from "../store/store";
//import {selectFavoritesMovies} from "../reducers/favorites"
import {addToFavorites} from "../reducers/favorites";
import {addAsSelected} from "../reducers/details"
import { useNavigate } from "react-router-dom";

type Props = {
    item:MoviesType;
};

const POSTER_PATH_BASE = "https://image.tmdb.org/t/p/w500/";

const MovieCard:React.FC<Props> = ({item}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleOnFavoritos = () => {
        //console.log('favoritos...',item)
        dispatch(addToFavorites(item));
    }

    const handleOnGotoDetails = () => {
        //console.log('selected...',item)
        dispatch(addAsSelected(item))
        navigate("/details");
    }

    return  <Card sx={{ maxWidth: 385, marginBottom: 2 }}>
                <CardMedia
                    component="img"
                    height="180"
                    image={POSTER_PATH_BASE.concat(item.poster_path)}
                    alt="movie poster"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {item.overview}
                    </Typography>
                    <Box sx={{marginTop:2}}>
                        <Typography variant="body2" color="text.secondary">
                            Lanzamiento {item.release_date}
                        </Typography>                        
                        <Typography variant="h5" color="text.secondary">
                            Rate {item.vote_average}
                        </Typography>                                                
                    </Box>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={handleOnFavoritos}>Agregar a Favoritos</Button>
                    <Button size="small" onClick={handleOnGotoDetails}>Ver mas</Button>
                </CardActions>
            </Card>
}

export default MovieCard;