import "./Cart.css";

import { useAppDispatch, useAppSelector } from "../../feature/hooks/hooks"
import { addByUnity, clearCart, removeItemCart, removeByUnity } from "../../feature/cartSlice";

export default function Cart() {

    const dispatch = useAppDispatch();
    const cartItems = useAppSelector(state => state.cart.items);

    const handleAddByUnit = (productId: number) => {
        dispatch(addByUnity({productId: productId, quantity: 1}));
    };

    const handleRemoveByUnity = (productId: number) => {
        dispatch(removeByUnity({ productId: productId, quantity: 1 }));
    };

    const handleRemoveItem = (productId: number) => {
        dispatch(removeItemCart(productId));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <>
            <section id="cart">
                <h2>Carrinho de compras</h2>
                {(cartItems.length === 0) ? (
                    <p>O carrinho está vazio.</p>
                ) : (
                    <div className="custom-card">
                        {cartItems.map(item => (
                            <div key={item.product.id}>
                                <img src={item.product.image} alt={item.product.description} />
                                <p>{item.product.description}</p>
                                <p>R${item.product.price * item.quantity}</p>
                                <p>{item.product.paymentType}</p>
                                <p>Quantidade: {item.quantity}</p>
                                <div className="custom-button">
                                    <button onClick={() => handleAddByUnit(item.product.id)}  className="btn btn-success">Adicionar unidade</button>
                                    <button onClick={() => (item.quantity > 1) ? handleRemoveByUnity(item.product.id) : handleRemoveItem(item.product.id)} className="btn btn-primary">Remover unidade</button>
                                    <button onClick={() => handleRemoveItem(item.product.id)} className="btn btn-warning">Remover do carrinho</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>
            <button onClick={handleClearCart} className="btn btn-danger clear-cart">Limpar Carrinho</button>
        </>
    )
}