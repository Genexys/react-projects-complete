import React from 'react';
import {useGlobalContext} from "./context";
import CartItem from "./CartItem";

const CartContainer = () => {
    const { cart, total, clearCart } = useGlobalContext()

    return (
        <section className="cart">
            <header>
                <h2>You bag</h2>
                {cart.length === 0 && <h4 className="empty-cart">
                    is currently empty
                </h4>}
            </header>

            <div>
                {cart.length !== 0 && cart.map((item) => <CartItem key={item.id} cartData={item}/>)}
            </div>
            {cart.length !== 0 && <footer>
                <hr/>
                <div className="cart-total">
                    <h4>
                        total <span>${total}</span>
                    </h4>
                </div>
                <button
                    className="btn clear-btn"
                    onClick={clearCart}
                >
                    clear cart
                </button>
            </footer>}

        </section>
    );
};

export default CartContainer;
