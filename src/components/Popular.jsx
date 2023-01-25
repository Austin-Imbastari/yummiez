import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

function Popular() {
    const [popularData, setPopularData] = useState([]);

    useEffect(() => {
        async function getData() {
            const check = localStorage.getItem("recipes");
            if (check) {
                setPopularData(JSON.parse(localStorage.getItem("recipes")));
            } else {
                const api = import.meta.env.VITE_SOME_KEY;
                const data = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${api}&number=9`);
                const res = await data.json();
                localStorage.setItem("recipes", JSON.stringify(res.recipes));
                setPopularData(res.recipes);
            }
        }
        getData();
    }, []);

    return (
        <>
            <Container>
                <h3>Popular Recipes</h3>
                <Splide
                    options={{
                        perPage: 4,
                        arrows: false,
                        pagination: false,
                        drag: "free",
                        gap: "5rem",
                    }}
                >
                    {popularData.map((recipe) => {
                        return (
                            <SplideSlide key={recipe.id}>
                                <Card>
                                    <Link to={`/recipes/${recipe.id} `}>
                                        <p>{recipe.title}</p>
                                        <img src={recipe.image} alt={recipe.title} />
                                        <Gradient />
                                    </Link>
                                </Card>
                            </SplideSlide>
                        );
                    })}
                </Splide>
            </Container>
        </>
    );
}

const Container = styled(motion.div)`
    margin: 4rem 0rem;

    h3 {
        margin-bottom: 1rem;
    }
`;

const Card = styled(motion.div)`
    min-height: 25rem;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;

    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        left: 0;
        border-radius: 2rem;
        position: absolute;
    }

    p {
        position: absolute;
        z-index: 10;
        left: 50%;
        bottom: 0%;
        transform: translate(-50%, 0%);
        color: #dddaa5;
        width: 100%;
        height: 40%;
        text-align: center;
        font-weight: 700;
        font-size: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Popular;
