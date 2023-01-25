import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function SearchedCuisine() {
    const [searched, setSearched] = useState([]);
    const { searchValue } = useParams();

    useEffect(() => {
        const getData = async (value) => {
            const api = import.meta.env.VITE_SOME_KEY;
            const data = await fetch(
                `https://api.spoonacular.com/recipes/complexSearch?&apiKey=${api}&number=9&query=${value}`
            );
            const res = await data.json();
            setSearched(res.results);
        };

        getData(searchValue);
    }, [searchValue]);
    return (
        <Container>
            <h3>Recipes</h3>
            <Grid>
                {searched.map((recipe) => {
                    return (
                        <Card key={recipe.id}>
                            <Link to={`/recipes/${recipe.id}`}>
                                <img src={recipe.image} alt={recipe.title} />
                                <h4>{recipe.title}</h4>
                            </Link>
                        </Card>
                    );
                })}
            </Grid>
        </Container>
    );
}

const Container = styled.div`
    margin-top: 2rem;

    h3 {
        margin-bottom: 3rem;
    }
`;

const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(2, minmax(20rem, 2fr));
    grid-gap: 3rem;
`;

const Card = styled(motion.div)`
    img {
        width: 100%;
        border-radius: 2rem;
    }

    h4 {
        text-align: center;
        padding: 1rem;
        color: #dddaa5;
    }
`;
export default SearchedCuisine;
