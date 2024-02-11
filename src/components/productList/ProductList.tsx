import { useEffect } from "react";
import "./ProductList.css";

import { Product, setProducts } from "../../feature/productSlice";
import { useAppDispatch, useAppSelector } from "../../feature/hooks/hooks";
import { addItem } from "../../feature/cartSlice";
import { setFavoriteProduct } from "../../feature/productSlice";
import { initializeRanking } from "../../feature/rankingSlice";

export default function ProductList() {
    const dispatch = useAppDispatch();
    const products = useAppSelector(state => state.products.products);

    const handleAddToCart = (product: Product) => {
        dispatch(addItem({ product: product, quantity: 1 }));
    };

    const handleFavoriteChange = (productId: number) => {
        const productToUpdate = products.find(product => product.id === productId);
        if (productToUpdate) {
            dispatch(setFavoriteProduct(productToUpdate));
        }
    };

    useEffect(() => {
        const fetchedProducts: Product[] = [
            { id: 1, description: "Mouse gamer", price: 439.00, paymentType: "À vista no PIX", image: "../../public/mouse-3.jpg", isFavorite: false },
            { id: 2, description: "Monitor muito bom", price: 1200.50, paymentType: "À vista no PIX", image: "../../public/monitor-1.jpg", isFavorite: false },
            { id: 3, description: "Teclado excelente", price: 749.99, paymentType: "À vista no PIX", image: "../../public/teclado-1.jpg", isFavorite: false },
            { id: 4, description: "Fone para quem joga FPS", price: 599.99, paymentType: "À vista no PIX", image: "../../public/fone-de-ouvido-2.jpg", isFavorite: false },
            { id: 5, description: "Fone de ouvido", price: 299.99, paymentType: "À vista no PIX", image: "../../public/fone-de-ouvido-1.jpg", isFavorite: false },
            { id: 6, description: "Fone de ouvido bom", price: 399.99, paymentType: "À vista no PIX", image: "../../public/fone-de-ouvido-3.jpg", isFavorite: false },
            { id: 7, description: "HD 1TB", price: 499.99, paymentType: "À vista no PIX", image: "../../public/hd.jpg", isFavorite: false },
            { id: 8, description: "Combo de placa de vídeos", price: 18449.99, paymentType: "À vista no PIX", image: "../../public/placa-video.jpg", isFavorite: false },
            { id: 9, description: "Processador Ryzen", price: 1000, paymentType: "À vista no PIX", image: "../../public/processador.jpg", isFavorite: false },
            { id: 10, description: "Notebook bom", price: 2500, paymentType: "À vista no PIX", image: "../../public/laptop-1.jpg", isFavorite: false },
            { id: 11, description: "Notebook excelente", price: 4500, paymentType: "À vista no PIX", image: "../../public/laptop-2.jpg", isFavorite: false },
            { id: 12, description: "Mouse barato", price: 20, paymentType: "À vista no PIX", image: "../../public/mouse-1.png", isFavorite: false },
            { id: 13, description: "Mouse ótimo", price: 200, paymentType: "À vista no PIX", image: "../../public/mouse-2.jpg", isFavorite: false },
            { id: 14, description: "Mouse pequeno", price: 50, paymentType: "À vista no PIX", image: "../../public/mouse-4.jpg", isFavorite: false },
            { id: 15, description: "Teclado bom", price: 159.99, paymentType: "À vista no PIX", image: "../../public/teclado-2.jpg", isFavorite: false },
        ];
        dispatch(setProducts(fetchedProducts));
        dispatch(initializeRanking(fetchedProducts))
    }, [dispatch]);

    return (
        <section className="mt-5" id="product">
            <h2>Lista de Produtos</h2>
            <div className="custom-card">
                {products.map(product => (
                    <div key={product.id}>
                        <img src={product.image} alt={product.description} />
                        <p>{product.description}</p>
                        <p>R${product.price}</p>
                        <p>{product.paymentType}</p>
                        <p>{product.isFavorite ? 'Favorito' : 'Não favorito'}</p>
                        <p>
                            <label htmlFor={`favorite-${product.id}`}>Adicionar como favorito</label>
                            <input
                                id={`favorite-${product.id}`}
                                type="checkbox"
                                checked={product.isFavorite}
                                onChange={() => handleFavoriteChange(product.id)}
                            />
                        </p>
                        <button className="btn btn-success" onClick={() => handleAddToCart(product)}>Adicionar ao carrinho</button>
                    </div>
                ))}
            </div>
        </section>
    )
}