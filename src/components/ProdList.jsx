import React from "react";
import "./ProdList.css";
import { useDispatch } from "react-redux";
import { CartActions } from "../global/CartSlice";

export const ProdList = 
({ name, id, imgURL, price }) => {
    const dispatch = useDispatch();
    const addToCart = () => {
        dispatch(CartActions.addToCart({
            name, id, price
        }))
    };

    return (
        <main className="card">
            <img src={imgURL} alt={name} />
            <h2>{name}</h2>
            <p>$ {price}</p>
            <button 
                onClick={addToCart}
                >Add to cart
            </button>
        </main>
    );
};



