import React, { useEffect, useState } from "react";
import {Movies as MoviesType} from "../types/Movies"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/material";
//import { useAppDispatch } from '../store/store';
//import {addToFavorites} from "../reducers/favorites";
import { useDispatch } from "react-redux";
//import { useAppSelector } from "../store/store";
//import {selectFavoritesMovies} from "../reducers/favorites"
import {addToFavorites} from "../reducers/favorites";

type Props = {
    item:MoviesType;
};

const POSTER_PATH_BASE = "https://image.tmdb.org/t/p/w500/";

const MovieDetail:React.FC<Props> = ({item}) => {

    const [expanded,setExpanded] = useState(false)
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('expanded->',expanded)
    },[expanded])

    const handleOnFavoritos = () => {
        //console.log('favoritos...',item)
        dispatch(addToFavorites(item));
    }

    const handleOnExpand = () => {
        setExpanded(!expanded);
    }

    return  <Card sx={{ maxWidth: 520, marginBottom: 2 }}>
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
                    <Button size="small" onClick={handleOnExpand}>Ver mas</Button>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>
                            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                            large plate and set aside, leaving chicken and chorizo in the pan. Add
                            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                            stirring often until thickened and fragrant, about 10 minutes. Add
                            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
}

export default MovieDetail;