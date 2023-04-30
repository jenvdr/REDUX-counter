import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter-slice';
import authReducer from './auth-slice';


const store = configureStore({
    reducer:  {
        counter: counterReducer,
        authentication: authReducer,
    }
});

export default store;