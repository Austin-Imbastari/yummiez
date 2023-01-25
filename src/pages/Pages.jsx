import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home";
import Cuisine from "./Cuisine";
import SearchedCuisine from "./SearchedCuisine";
import Recipes from "./Recipes";
import { AnimatePresence } from "framer-motion";

function Pages() {
    const location = useLocation();
    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Home />} />
                <Route path='/cuisine/:id' element={<Cuisine />} />
                <Route path='/searchedcuisine/:searchValue' element={<SearchedCuisine />} />
                <Route path='/recipes/:id' element={<Recipes />} />
            </Routes>
        </AnimatePresence>
    );
}

export default Pages;
