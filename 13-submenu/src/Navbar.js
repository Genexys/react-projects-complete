import React from 'react';
import {useGlobalContext} from "./context";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/all";

const NavBar = () => {
    const { openSidebarHandler, openSubmenuHandler, closeSubmenuHandler} = useGlobalContext();
    const displayMenu = (e) => {
        const page = e.target.textContent;
        const tempBtn = e.target.getBoundingClientRect();
        const center = (tempBtn.left + tempBtn.right) / 2;
        const bottom = tempBtn.bottom -3;
        openSubmenuHandler(page, {center, bottom});
    }

    const handleSubmenu = (e) => {
        if (!e.target.classList.contains('link-btn')) {
            closeSubmenuHandler()
        }
    }

    return (
        <nav className="nav" onMouseOver={handleSubmenu}>
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} className="nav-logo" alt="logo"/>
                    <button className="btn toggle-btn" onClick={openSidebarHandler}>
                        <FaBars />
                    </button>
                </div>
                <ul className="nav-links">
                    <li>
                        <button className="link-btn" onMouseOver={displayMenu}>
                            products
                        </button>
                    </li>
                    <li>
                        <button className="link-btn" onMouseOver={displayMenu}>
                            developers
                        </button>
                    </li>
                    <li>
                        <button className="link-btn" onMouseOver={displayMenu}>
                            company
                        </button>
                    </li>
                </ul>
                <button className="btn">
                    Sign in
                </button>
            </div>
        </nav>
    );
};

export default NavBar;
