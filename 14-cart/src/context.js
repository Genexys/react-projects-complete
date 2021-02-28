import React, { useContext, useState, useEffect, useReducer } from 'react'
import cartItem from './data'
import reducer from './reducer'
export const AppContext = React.createContext();

const initialState = {
    loading: true,
    cart: [],
    total: 0,
    amount: 0,
}

export const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const clearCart = () => {
        dispatch({type: "CLEAR_CART"})
    }

    const removeItem = (id) => {
        dispatch({type: "REMOVE_ITEM", payload: id})
    }
    const increase = (id) => {
        dispatch({type: "INCREASE", payload: id})
    }

    const decrease = (id) => {
        dispatch({type: "DECREASE", payload: id})
    }
    const fetchData = async () => {
        dispatch({type: "LOADING"});
        const res = await fetch('http://localhost:3000/cart')
        const cart = await res.json();
        dispatch({type: "FETCH_DATA", payload: cart});
    }

    const toggleAmount = (id, type) => {
        dispatch({type: "TOGGLE_AMOUNT", payload: {id, type}})
    }

    useEffect(() => {
        fetchData()
    },[])

    useEffect(() => {
        dispatch({type: "GET_ALL"})
    }, [state.cart])

    return <AppContext.Provider value={{
        ...state,
        clearCart,
        removeItem,
        increase,
        decrease,
        toggleAmount
        }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}