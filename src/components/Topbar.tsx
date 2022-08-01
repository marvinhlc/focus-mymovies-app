import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {removeToken} from '../reducers/user';
import { useAppDispatch } from '../store/store';
import { searchMovieByTitle } from '../reducers/searching';
import { useEffect, useState } from 'react';
import { saveQueryString } from '../reducers/query';

export const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      //marginLeft: theme.spacing(1),
      marginLeft:'auto',
      marginRight:'auto',
      width: '40%',
    },
  }));
  
export const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

function Topbar(){
    const [query,setQuery] =  useState("")
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleOnTextChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    }

    const handleOnClickFavoritos = () => {
      navigate('/favorites');
    }

    const handleOnClickHome = () => {
      navigate('/');
    }

    const handleOnClickLogout = () => {
      console.log('logout...')
      dispatch(removeToken());
    }

    const handleOnClickSearch = () => {
      console.log('enter...')
      dispatch(saveQueryString(query));
      dispatch(searchMovieByTitle(query));
      navigate('/results')
    }

    return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block', marginRight:20, } }}
          >
            <Button color="inherit" onClick={handleOnClickHome}>MyMovies</Button>
          </Typography>
          <Search>
           
            <StyledInputBase
              placeholder="Buscar movies…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleOnTextChange}
            />
            <Button color="inherit" onClick={handleOnClickSearch}><SearchIcon /></Button>
          </Search>
          
          <Button color="inherit" onClick={handleOnClickFavoritos}>Favoritos</Button>
          <Button color="inherit" onClick={handleOnClickLogout}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
    )
}

export default Topbar;