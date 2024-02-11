import { useEffect } from "react";
import "./ProductList.css";

import mouse3 from "../../assets/mouse-3.jpg";
import monitor1 from "../../assets/monitor-1.jpg";
import teclado1 from "../../assets/teclado-1.jpg";
import fone2 from "../../assets/fone-de-ouvido-2.jpg";
import fone1 from "../../assets/fone-de-ouvido-1.jpg";
import fone3 from "../../assets/fone-de-ouvido-3.jpg";
import hd from "../../assets/hd.jpg";
import placa from "../../assets/placa-video.jpg";
import processador from "../../assets/processador.jpg";
import laptop1 from "../../assets/laptop-1.jpg";
import laptop2 from "../../assets/laptop-2.jpg";
import mouse1 from "../../assets/mouse-1.png";
import mouse2 from "../../assets/mouse-2.jpg";
import mouse4 from "../../assets/mouse-4.jpg";
import teclado2 from "../../assets/teclado-2.jpg";

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
            { id: 1, description: "Mouse gamer", price: 439.00, paymentType: "À vista no PIX", image: mouse3, isFavorite: false },
            { id: 2, description: "Monitor muito bom", price: 1200.50, paymentType: "À vista no PIX", image: monitor1, isFavorite: false },
            { id: 3, description: "Teclado excelente", price: 749.99, paymentType: "À vista no PIX", image: teclado1, isFavorite: false },
            { id: 4, description: "Fone para quem joga FPS", price: 599.99, paymentType: "À vista no PIX", image: fone2, isFavorite: false },
            { id: 5, description: "Fone de ouvido", price: 299.99, paymentType: "À vista no PIX", image: fone1, isFavorite: false },
            { id: 6, description: "Fone de ouvido bom", price: 399.99, paymentType: "À vista no PIX", image: fone3, isFavorite: false },
            { id: 7, description: "HD 1TB", price: 499.99, paymentType: "À vista no PIX", image: hd, isFavorite: false },
            { id: 8, description: "Combo de placa de vídeos", price: 18449.99, paymentType: "À vista no PIX", image: placa, isFavorite: false },
            { id: 9, description: "Processador Ryzen", price: 1000, paymentType: "À vista no PIX", image: processador, isFavorite: false },
            { id: 10, description: "Notebook bom", price: 2500, paymentType: "À vista no PIX", image: laptop1, isFavorite: false },
            { id: 11, description: "Notebook excelente", price: 4500, paymentType: "À vista no PIX", image: laptop2, isFavorite: false },
            { id: 12, description: "Mouse barato", price: 20, paymentType: "À vista no PIX", image: mouse1, isFavorite: false },
            { id: 13, description: "Mouse ótimo", price: 200, paymentType: "À vista no PIX", image: mouse2, isFavorite: false },
            { id: 14, description: "Mouse pequeno", price: 50, paymentType: "À vista no PIX", image: mouse4, isFavorite: false },
            { id: 15, description: "Teclado bom", price: 159.99, paymentType: "À vista no PIX", image: teclado2, isFavorite: false },
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