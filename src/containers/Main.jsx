import React from "react";
import { Auth } from "./Auth";
import { Layout } from "../components/Layout";

export const Main = () => {
    return (
        <React.Fragment>
            <Auth />
            <Layout />
        </React.Fragment>
    );
};



