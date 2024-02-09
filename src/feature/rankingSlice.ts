import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from './productSlice';

interface RankingState {
  products: Product[];
}

const initialState: RankingState = {
  products: [],
};

const rankingSlice = createSlice({
  name: 'ranking',
  initialState,
  reducers: {
    initializeRanking(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    },
    toggleFavorite(state, action: PayloadAction<number>) {
      const product = state.products.find(prod => prod.id === action.payload);
      if (product) {
        product.isFavorite = !product.isFavorite;
      }
    },
  },
});

export const { initializeRanking, toggleFavorite } = rankingSlice.actions;
export default rankingSlice.reducer;