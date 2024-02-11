import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from './productSlice';

interface RankingState {
  products: Product[];
}

const initialState: RankingState = {
  products: [],
};

export const getFavoriteProducts = (state: { ranking: RankingState }) => state.ranking.products.filter((product) => product.isFavorite);

const rankingSlice = createSlice({
  name: 'ranking',
  initialState,
  reducers: {
    initializeRanking(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    },
    toggleFavorite(state, action: PayloadAction<number>) {
      state.products = state.products.map(product => {
        if (product.id === action.payload) {
          return { ...product, isFavorite: !product.isFavorite };
        }
        return product;
      });
    }
  },
});

export const { initializeRanking, toggleFavorite } = rankingSlice.actions;
export default rankingSlice.reducer;