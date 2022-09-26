import { configureStore,applyMiddleware } from "@reduxjs/toolkit";
import cartReducer from './Cartslice'
 import {persistStore,persistReducer} from "redux-persist"
 import storage from "redux-persist/lib/storage";




const persistConfig={
    key:"main-root",
    storage
}
const persistedReducer=persistReducer(persistConfig,cartReducer)



const store = configureStore({
    reducer:{
        cart :persistedReducer
        
    }
    // ,
    // middleware:(getDefaultMiddleware) => getDefaultMiddleware(),
})
// const Persistor=persistStore(store)
// export{Persistor}
export default store