import './Login.css'
import { Button, CssBaseline, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import {useForm, SubmitHandler} from "react-hook-form"
import {getSessionToken} from "../reducers/user"
import {User as UserType} from '../types/User'
import { useAppDispatch } from '../store/store';

function Login() {

    const dispatch = useAppDispatch();

    const {
        register, 
        handleSubmit
    } = useForm<UserType>();

    const handleOnSubmit:SubmitHandler<UserType> = (data:UserType) => {
        dispatch(getSessionToken(data));
    };

    return (
        <div>
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