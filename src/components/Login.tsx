import './Login.css'
import { Button, CssBaseline, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import {useForm, SubmitHandler} from "react-hook-form"
import {getSessionToken} from "../reducers/user"
import { useDispatch } from 'react-redux';
import {User as UserType} from '../types/User'
import { useAppDispatch } from '../store/store';
//import { useAppSelector } from '../store/store';

type Props = {
    onLogin: () => void;
}

function Login() {

    const dispatch = useAppDispatch();

    const {
        register, 
        handleSubmit
    } = useForm<UserType>();

    const handleOnSubmit:SubmitHandler<UserType> = (data:UserType) => {
        console.log('submit..', data);
        dispatch(getSessionToken(data));
    };

    return (
        <div className='contenedor'>
            <CssBaseline />
            <form onSubmit={handleSubmit(handleOnSubmit)}>
                <Box className="loginBox">
                    <Typography variant="h5">Iniciar sesion</Typography>
                    <TextField
                        required
                        label="Email"
                        id="email"
                        size="small"
                        fullWidth={true}
                        margin="normal"
                        {...register("email", { required: true })} />
                    <TextField
                        required
                        label="Password"
                        id="password"
                        size="small"
                        type="password"
                        fullWidth={true}
                        margin="normal"
                        {...register("password", { required: true })} />

                    <Button
                        type="submit"
                        size="medium"
                        color="success"
                        variant="contained"
                        disableElevation
                        fullWidth
                    >Iniciar sesión</Button>
                </Box>
            </form>
        </div>
    );
}

export default Login;