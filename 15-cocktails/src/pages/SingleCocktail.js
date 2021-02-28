import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from "axios";
import Loading from "../components/Loading";
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [cocktail, setCocktail] = useState(null);

    const fetchData = async () => {
        try {
            const res = await axios.get(`${url}${id}`);
            const { drinks } = await res.data;

            if (drinks) {
                const newCocktails = drinks.map((item) => {
                    const {idDrink, strDrink, strDrinkThumb, strCategory, strGlass, strInstructions, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5} = item;

                    const ingredients = [
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5
                    ]

                    return {
                        name: strDrink,
                        img: strDrinkThumb,
                        info: strCategory,
                        glass: strGlass,
                        instruction: strInstructions,
                        ingredients
                    }
                })

                setCocktail(newCocktails[0])
            } else {
                setCocktail(null)
            }
            setLoading(false);
        } catch (e) {
            setLoading(false);
            console.log(e.message)
        }
    }

    useEffect(() => {
        setLoading(true);
        fetchData();
    }, [id])

    if (loading) {
        return <Loading />
    }

    if (!cocktail) {
        return <h2>No cocktail info</h2>
    }

    const { name, img, info, glass, instruction, ingredients } = cocktail;

    return (
        <section className="section cocktail-section">
            <Link className="btn btn-primary">Back</Link>
            <h2 className="section-title">{name}</h2>
            <div className="drink">
                <img src={img} alt={name} />
                <div className="drink-info">
                    <p>
                        <span className="drink-data">name: </span>
                        {name}
                    </p>
                    <p>
                        <span className="drink-data">Category: </span>
                        {info}
                    </p>
                    <p>
                        <span className="drink-data">glass: </span>
                        {glass}
                    </p>
                    <p>
                        <span className="drink-data">ingredients: </span>
                        {ingredients.map((item, index) => {
                            return item ? <span key={index}>{item}</span> : null
                        })}
                    </p>
                    <p>
                        <span className="drink-data">instructions: </span>
                        {instruction}
                    </p>

                </div>
            </div>
        </section>
    );
};

export default SingleCocktail;
