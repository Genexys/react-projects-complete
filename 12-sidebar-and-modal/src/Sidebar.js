import React from 'react';
import { FaTimes } from "react-icons/all";
import { links, social } from './data';
import logo from './logo.svg'
import {useGlobalContext} from "./context";

const Sidebar = () => {
    const { sidebarOpen, closeSidebarHandler } = useGlobalContext()

    return (
        <aside className={`sidebar ${sidebarOpen ? 'show-sidebar' : ''}`}>
            <div className="sidebar-header">
                <img src={logo} alt="logo" className="logo"/>
                <div className="close-btn" onClick={closeSidebarHandler}>
                    <FaTimes />
                </div>
            </div>

            <ul className="links">
                {links.map((link) => {
                    const { id, url, text, icon } = link;

                    return (
                        <li key={id}>
                            <a href={url}>
                                {icon}
                                {text}
                            </a>
                        </li>
                        )
                })}
            </ul>
            <ul className="social-icons">
                {social.map((link) => {
                    const { id, url, icon } = link;

                    return (
                        <li key={id}>
                            <a href={url}>
                                {icon}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </aside>
    );
};

export default Sidebar;
