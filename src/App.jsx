import { useState, useEffect } from "react";
import GlobalStyles from "./GlobalStyles";
import Navbar from "./components/Navbar";
import Pages from "./pages/Pages";
import Categories from "./components/Categories";
import SearchBar from "./components/SearchBar";

function App() {
    return (
        <>
            <GlobalStyles />
            <Navbar />
            <SearchBar />
            <Categories />
            <Pages />
        </>
    );
}

export default App;
