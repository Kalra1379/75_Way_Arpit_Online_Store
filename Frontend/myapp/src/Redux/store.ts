import {configureStore} from '@reduxjs/toolkit';
import { productsApi } from '../services/api';

const store=configureStore({
    reducer:{
        [productsApi.reducerPath]:productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export default store;