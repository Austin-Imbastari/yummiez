import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function SearchBar() {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate(`/searchedcuisine/${input}`);
    };
    return (
        <>
            <FormContainer onSubmit={submitHandler}>
                <Form>
                    <input value={input} onChange={(e) => setInput(e.target.value)} type='text' />
                </Form>
            </FormContainer>
        </>
    );
}

const FormContainer = styled.form`
    /* border: 1px solid red; */
    text-align: center;
    position: relative;
    width: 100%;

    input {
        border: none;
        background: #dddaa5;
        font-size: 1.5rem;
        color: #fff;
        padding: 1rem 3rem;
        border-radius: 1rem;
        outline: none;
    }

    /* input,
    select,
    textarea {
        color: #db5a2f;
        font-weight: 700;
    } */
    .svg {
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: #fff;
    }
`;

const Form = styled.div`
    width: 100%;
    position: relative;
`;

export default SearchBar;
