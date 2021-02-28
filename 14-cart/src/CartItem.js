import React from 'react';
import {useGlobalContext} from "./context";
import {FaArrowAltCircleDown, FaArrowAltCircleUp} from "react-icons/all";

const CartItem = ({cartData}) => {

    const { removeItem, increase, decrease, toggleAmount  } = useGlobalContext();

    return (
        <article className="cart-item">
            <img src={cartData.img} alt={cartData.title} />

            <div>
                <h4>{cartData.title}</h4>
                <h4 className="item-price">${cartData.price}</h4>
                <button className="remove-btn" onClick={() => removeItem(cartData.id)}>
                    remove
                </button>
            </div>
            <div>
                <button className="amount-btn" onClick={() => toggleAmount(cartData.id, 'inc')}> <FaArrowAltCircleUp/> </button>
                <p className="amount">
                    {cartData.amount}
                </p>
                <button className="amount-btn" onClick={() => toggleAmount(cartData.id, 'dec')}> <FaArrowAltCircleDown /> </button>
            </div>
        </article>
    );
};

export default CartItem;
