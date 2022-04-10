import React from "react";
import "./Header.css";
import { useDispatch } from "react-redux";
import { AuthActions } from "../global/AuthSlice";
import { Cart } from "../cart/Cart";

export const Header = () => {
    const dispatch = useDispatch();
    const logoutHandler = () => {
        dispatch(AuthActions.logout());
    };

    return (
        <header>
            <nav className="header-nav">
                <ul className="header-ul">
                    <li><h2>Redux Shopping App</h2></li>
                    <li><Cart /></li>
                    <li>
                        <button
                            className="logout-btn"
                            onClick={logoutHandler}
                            >Logout
                        </button>{" "}
                    </li>
                </ul>
            </nav>
        </header>
    );
};



