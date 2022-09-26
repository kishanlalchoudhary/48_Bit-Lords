import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './Cartslice'




const store = configureStore({
    reducer:{
        cart :cartReducer,
        
    }
    // ,
    // middleware:(getDefaultMiddleware) => getDefaultMiddleware(),
})

export default store