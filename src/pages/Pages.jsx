import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Cuisine from "./Cuisine";
import SearchedCuisine from "./SearchedCuisine";
import Recipes from "./Recipes";

function Pages() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cuisine/:id' element={<Cuisine />} />
            <Route path='/searchedcuisine/:searchValue' element={<SearchedCuisine />} />
            <Route path='/recipes/:id' element={<Recipes />} />
        </Routes>
    );
}

export default Pages;
