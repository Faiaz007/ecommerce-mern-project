import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth-slice'; // Correct default import

const store = configureStore({
    reducer: {
        auth: authReducer, // Use the imported reducer here
    },
});

export default store;