import React, { createContext, useEffect, useReducer, useState } from 'react'
import { reducer } from './Reducer'

export const Card = createContext()

const Context = ({ children }) => {

    const initialTodos = {
        products: [],
        singleProd: []
    };


    const reducer = (state, action) => {
        const { type, payload } = action
        switch (type) {
            case "SetAllProductData":
                console.log(action)
                return { ...state, products: payload }
            case "setSingleProduct":
                return {
                    ...state, singleProd: payload
                }
            default:
                return state;
        }
    };


    const produts = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            dispatch({ type: "SetAllProductData", payload: data });
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        produts();
    }, [])
    // end 

    const [state, dispatch] = useReducer(reducer, initialTodos);
    console.log("state", state)
    return (
        <Card.Provider value={{ state, dispatch, initialTodos }}>
            {children}
        </Card.Provider>
    )
}

export default Context