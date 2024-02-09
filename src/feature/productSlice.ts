import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Product {
    id: number;
    name: string;
    price: number;
    isFavorite: boolean;
}

export interface ProductsState {
    products: Product[];
}

const initialState: ProductsState = {
    products: [],
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts(state, action: PayloadAction<Product[]>) {
            state.products = action.payload;
        },
    },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;