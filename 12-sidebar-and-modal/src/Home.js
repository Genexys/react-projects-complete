import React, { useContext } from 'react';
import { FaBars } from 'react-icons/fa';
import { AppContext, useGlobalContext } from "./context";

const Home = () => {
    const { openSidebarHandler, openModalHandler} = useGlobalContext()

    return (
        <main>
            <button className="sidebar-toggle" onClick={openSidebarHandler}>
                <FaBars />
            </button>

            <button className="btn" onClick={openModalHandler}>
                Open Modal
            </button>
        </main>
    );
};

export default Home;
