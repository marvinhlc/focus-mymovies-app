import React, { useEffect } from "react";
import './home.css'
import {Box, Typography} from "@mui/material";
import Topbar from "../components/Topbar";
import Movieslist from "../components/Movieslist";
import {selectSearchingResults} from '../reducers/searching';
import { useAppSelector } from '../store/store';
import { selectQueryString } from "../reducers/query";

export const Favorites: React.FC = () => {
    const query = useAppSelector(selectQueryString);

    return (
        <Box>
            <Topbar />
            <div className="Contenedor">
                <Typography>Resultado de: {query.valor}</Typography>
                <Movieslist origen="searching" />
            </div>
        </Box>
    );
};

export default Favorites;