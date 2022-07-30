import { configureStore } from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import trendingReducer from "../reducers/trending";
import userReducer from '../reducers/user';
import favoritesReducer from '../reducers/favorites';

export const store = configureStore({
    reducer:{
        token:userReducer,
        trending:trendingReducer,
        favorites:favoritesReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
