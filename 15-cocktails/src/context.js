import React, { useState, useEffect, useContext, useCallback } from 'react';
import axios from 'axios';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const AppContext = React.createContext()

const initialState = {

}

export const AppProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [cocktails, setCocktails] = useState([])

    const fetchData = useCallback(async () => {
        setLoading(true);

        try {
            const res = await axios.get(`${url}${searchTerm}`)
            const { drinks } = await res.data;

            if (drinks) {
                const newCocktails = drinks.map((item) => {
                    const {idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass} = item;
                    return {
                        id: idDrink,
                        name: strDrink,
                        img: strDrinkThumb,
                        info: strAlcoholic,
                        glass: strGlass
                    }
                })

                setCocktails(newCocktails)
            } else {
                setCocktails([])
            }
            setLoading(false);
        } catch (err) {
            console.log(err.message)
            setLoading(false);
        }

    })

    useEffect(() => {
        fetchData()
    }, [searchTerm, fetchData])

    return <AppContext.Provider value={{
        loading,
        setLoading,
        setSearchTerm,
        cocktails
    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}