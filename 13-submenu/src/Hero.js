import React from 'react';
import {useGlobalContext} from "./context";
import phoneImg from "./images/phone.svg";

const Hero = () => {
    const { closeSubmenuHandler } = useGlobalContext();

    return (
        <section className="hero" onMouseOver={closeSubmenuHandler}>
            <div className="hero-center">
                <article className="hero-info">
                    <h1>Payments infrastructure for the internet</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dignissimos enim fuga id, illum inventore modi officia optio sunt. Necessitatibus!</p>
                    <button className="btn">star now</button>
                </article>
                <article className="hero-images">
                    <img src={phoneImg} className="phone-img" alt="phone"/>
                </article>
            </div>
        </section>
    );
};

export default Hero;
