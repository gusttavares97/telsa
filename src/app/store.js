import { configureStore } from " @reduxjs/toolkit";
import menuItemReducer from ' ../features/menuItem/menuItem/menuItemSlice'

export const store = configureStore({
    reducer:{
        menuItem: menuItemReducer,
    }
});