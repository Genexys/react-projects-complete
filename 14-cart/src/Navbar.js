import React from 'react';
import {useGlobalContext} from "./context";
import {FaShoppingCart} from "react-icons/all";

const Navbar = () => {
    const {amount} = useGlobalContext();

    return (
        <nav>
            <div className="nav-center">
                <h3>UseReducer</h3>
                <div className="nav-container">
                    <FaShoppingCart size="30" />
                    <div className="amount-container">
                        <p className="total-amount">{amount}</p>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
