import React from "react";
import "./Layout.css";
import { useSelector } from "react-redux";
import { Header } from "./Header";
import { Products } from "../data/Products";

export const Layout = () => {
    return (
        <main className="layout">
            <Header />
            <Products />
        </main>
    );
};


