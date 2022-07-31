import React, { useEffect, useState } from "react";
import {Movies as MoviesType} from "../types/Movies";
import {Credits as CreditsType} from "../types/Credits";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, ListItemButton, ListItemText } from "@mui/material";
//import { useAppDispatch } from '../store/store';
//import {addToFavorites} from "../reducers/favorites";
//import { useDispatch } from "react-redux";
//import { useAppSelector } from "../store/store";
//import {selectFavoritesMovies} from "../reducers/favorites"
import {addToFavorites,removeFromFavorites} from "../reducers/favorites";
import {getCreditsMovie, selectCreditsMovie} from "../reducers/credits";
import {getSuggestedMovies, selectSuggestedMovies} from "../reducers/suggested";
import { useAppDispatch, useAppSelector } from "../store/store";

type Props = {
    item:MoviesType;
};

const POSTER_PATH_BASE = "https://image.tmdb.org/t/p/w500/";

const MovieDetail:React.FC<Props> = ({item}) => {
    const [expanded,setExpanded] = useState(false);
    const dispatch = useAppDispatch();
    const credits = useAppSelector(selectCreditsMovie);
    const suggested = useAppSelector(selectSuggestedMovies);

    const handleOnFavoritos = () => {
        dispatch(removeFromFavorites(item));
    }

    const handleOnExpand = () => {
        setExpanded(!expanded);
        if(expanded === false){
            dispatch(getCreditsMovie(item));
            dispatch(getSuggestedMovies(item));
        }
    }

    const RenderCreditsList = credits.list.map((item) => {
        return <ListItemButton component="a" href="#simple-list">
                <ListItemText  key={item.cast_id}>{item.name}</ListItemText >
                </ListItemButton>
    });

    const RenderSuggestedList = suggested.list.map((item) => {
        return <ListItemButton component="a" href="#simple-list">
                <ListItemText  key={item.id}>{item.title}</ListItemText >
                </ListItemButton>
    });

    return  <Card sx={{ maxWidth: 520, marginBottom: 2, marginTop:2 }}>
                <CardMedia
                    component="img"
                    height="200"
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
                    <Button size="small" onClick={handleOnFavoritos}>Quitar de Favoritos</Button>
                    <Button size="small" onClick={handleOnExpand}>Expandir</Button>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography variant="h5" color="text.secondary">
                            Elenco
                        </Typography>
                        { RenderCreditsList }
        
                        <Typography variant="h5" color="text.secondary">
                            Recomendaciones
                        </Typography>
                        { RenderSuggestedList }
                    </CardContent>
                </Collapse>
            </Card>
}

export default MovieDetail;