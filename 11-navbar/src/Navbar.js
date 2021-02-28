import React, { useState, useRef, useEffect } from 'react';
import { FaBars, FaFacebook, FaTwitter, FaLinkedin, FaBehance } from "react-icons/all";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import logo from "./logo.svg";

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [menuList, setMenuList] = useState([]);
    const [socialList, setSocialList] = useState([]);
    const linksContainerRef = useRef(null)
    const linksRef = useRef(null)

    useEffect(() => {
        try {
            const fetchMenu = async () => {
                const res = await fetch("http://localhost:3000/menu");
                return res.json();
            }

            const fetchSocials = async () => {
                const res = await fetch("http://localhost:3000/socials");
                return res.json();
            }

            fetchMenu().then((data) => {
                setMenuList(data)
            })

            fetchSocials().then((data) => {
                setSocialList(data);
            })

        } catch (err) {
            console.log(err)
        }

        const linksHeight = linksRef.current.getBoundingClientRect().height;

        if (showMenu) {
            linksContainerRef.current.style.height = `${linksHeight}px`;
        } else {
            linksContainerRef.current.style.height = `0px`;
        }

    }, [showMenu])

    const showMenuHandle = () => {
        setShowMenu(state => {
            return !showMenu;
        })
    }

    return (
        <nav className="nav-center">
            <div className="nav-header">
                <img src={logo} alt=""/>
                <button className="nav-toggle" onClick={showMenuHandle}>
                    <FaBars />
                </button>
            </div>
            <div className={`links-container`} ref={linksContainerRef}>
                <ul className="links" ref={linksRef}>
                    {menuList.map(item => <li key={item.id}>
                        <a href={item.url}>{item.text}</a>
                    </li>)}
                </ul>
            </div>
            <ul className="social-icons">
                <ul className="links">
                    {socialList.map(item => <li key={item.id}>
                        <a href={item.url}>{item.icon}</a>
                    </li>)}
                </ul>
            </ul>
        </nav>
    );
};

export default NavBar;
