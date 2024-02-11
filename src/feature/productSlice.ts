import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Product {
    id: number;
    description: string;
    price: number;
    paymentType: string,
    image: string,
    isFavorite: boolean;
}

export interface ProductsState {
    products: Product[];
}

const initialState: ProductsState = {
    products: [],
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProducts(state, action: PayloadAction<Product[]>) {
            state.products = action.payload.map(product => ({
                ...product,
                isFavorite: false
            }));
        },
        setFavoriteProduct(state, action: PayloadAction<Product>) {
            state.products = state.products.map(product => {
                if (product.id === action.payload.id) {
                    return { ...product, isFavorite: !product.isFavorite };
                }
                return product;
            });
        }        
    },
});

export const { setProducts, setFavoriteProduct } = productsSlice.actions;
export default productsSlice.reducer;