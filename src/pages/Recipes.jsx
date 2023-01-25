import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

function Recipes() {
    const [recipes, setRecipes] = useState();
    const [activeTab, setActiveTab] = useState("instructions");
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        async function getData() {
            const api = import.meta.env.VITE_SOME_KEY;
            const data = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${api}`);
            const res = await data.json();
            setRecipes(res);
        }

        getData();
    }, [id]);

    return (
        <>
            <RecipeContainer>
                <div>
                    <h1>{recipes?.title}</h1>
                    <img src={recipes?.image} alt='' />
                </div>
                <Info>
                    <Button
                        className={activeTab === "instructions" ? "active" : ""}
                        onClick={() => setActiveTab("instructions")}
                    >
                        Instructions
                    </Button>
                    <Button
                        className={activeTab === "ingredients" ? "active" : ""}
                        onClick={() => setActiveTab("ingredients")}
                    >
                        Ingredients
                    </Button>
                    {activeTab === "instructions" ? (
                        <div>
                            <h3 dangerouslySetInnerHTML={{ __html: recipes?.instructions }}></h3>
                            <h3 dangerouslySetInnerHTML={{ __html: recipes?.summary }}></h3>
                        </div>
                    ) : (
                        <div>
                            <ul>
                                {recipes.extendedIngredients.map((ing) => {
                                    <li key={ing.id}>{ing.original}</li>;
                                })}
                            </ul>
                        </div>
                    )}
                </Info>
            </RecipeContainer>
        </>
    );
}

const RecipeContainer = styled.div`
    display: flex;
    color: #dddaa5;
    margin-top: 10rem;
    margin-bottom: 5rem;

    .active {
        background: #db5a2f;
        color: #fff;
    }

    h2 {
        margin-bottom: 2rem;
    }
    li {
        font-size: 1.2rem;
        line-height: 2.5rem;
    }
    ul {
        margin-top: 2rem;
    }
    img {
        margin-top: 2rem;
    }
    h3 {
        margin-top: 1rem;
    }
`;

const Button = styled.button`
    padding: 1rem 2rem;
    color: #000;
    background: #fff;
    border: 2px solid black;
    margin-right: 2rem;
    font-weight: 600;
    cursor: pointer;
`;

const Info = styled.div`
    margin-left: 10rem;
    width: 100%;
`;

export default Recipes;
