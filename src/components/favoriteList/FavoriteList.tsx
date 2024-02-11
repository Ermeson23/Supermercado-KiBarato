import { useAppDispatch, useAppSelector } from "../../feature/hooks/hooks";
import "./FavoriteList.css";
import { setFavoriteProduct } from "../../feature/productSlice";

export default function FavoriteList() {

  const favoriteProducts = useAppSelector(state => state.products.products);
  const dispatch = useAppDispatch();

  const handleFavoriteChange = (productId: number) => {
    const productToUpdate = favoriteProducts.find(product => product.id === productId);
    if (productToUpdate) {
        dispatch(setFavoriteProduct(productToUpdate));
    }
  };

  return (
    <section id="favorite">
      <h2>Produtos Favoritos</h2>
      <div className="custom-card">
        {
          (
            favoriteProducts
              .filter(product => product.isFavorite)
              .map(product => (
                <div key={product.id}>
                  <img src={product.image} alt={product.description} />
                  <p>{product.description}</p>
                  <p>R${product.price}</p>
                  <p>{product.paymentType}</p>

                  <label htmlFor={`favorite-${product.id}`}>Remover dos favoritos</label>
                  <input
                    id={`favorite-${product.id}`}
                    type="checkbox"
                    checked={product.isFavorite}
                    onChange={() => handleFavoriteChange(product.id)}
                  />
                </div>
              ))
          )}
      </div>
    </section>
  );
}
