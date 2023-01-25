import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

function Cuisine() {
    const [cuisine, setCuisine] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const getData = async (name) => {
            const check = localStorage.getItem(name);
            if (check) {
                setCuisine(JSON.parse(localStorage.getItem(name)));
            } else {
                const api = import.meta.env.VITE_SOME_KEY;
                const data = await fetch(
                    `https://api.spoonacular.com/recipes/complexSearch?&apiKey=${api}&number=9&cuisine=${name}`
                );

                const res = await data.json();
                localStorage.setItem(name, JSON.stringify(res.results));
            }
        };
        getData(id);
    }, [id]);

    function capital(str) {
        const firstLetter = str.charAt(0).toUpperCase();
        const res = str.replace(str[0], firstLetter);
        return res;
    }

    return (
        <Container>
            <h3>{capital(id)} Recipe</h3>
            <Grid
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                {cuisine.map((recipe) => {
                    return (
                        <Card key={recipe.id}>
                            <Link to={`/recipes/${recipe.id} `}>
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

export default Cuisine;
