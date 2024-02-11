import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../productSlice";
import cartReducer from "../cartSlice";
import rankingReducer from "../rankingSlice";

export const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer,
        ranking: rankingReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;