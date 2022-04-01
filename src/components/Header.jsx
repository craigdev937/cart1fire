import React from "react";
import "./Header.css";

export const Header = () => {
    return (
        <header>
            <nav className="header-nav">
                <ul className="header-ul">
                    <li><h2>Redux Shopping App</h2></li>
                    <li><h3>Cart Component</h3></li>
                    <li>
                        <button
                            className="logout-btn"
                            // onClick={logoutHandler}
                            >Logout
                        </button>{" "}
                    </li>
                </ul>
            </nav>
        </header>
    );
};



