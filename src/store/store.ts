import { configureStore } from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import trendingReducer from "../reducers/trending";
import userReducer from '../reducers/user';
import favoritesReducer from '../reducers/favorites';
import detailReducer from '../reducers/details'

export const store = configureStore({
    reducer:{
        token:userReducer,
        trending:trendingReducer,
        favorites:favoritesReducer,
        movie:detailReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
