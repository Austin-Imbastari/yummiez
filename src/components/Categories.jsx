import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiFastNoodles, GiPig } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Categories() {
    return (
        <>
            <List>
                <Item to={"cuisine/italian"}>
                    <FaPizzaSlice className='icon' />
                    <h4>Italian</h4>
                </Item>
                <Item to={"cuisine/american"}>
                    <FaHamburger className='icon' />
                    <h4>American</h4>
                </Item>
                <Item to={"cuisine/thai"}>
                    <GiFastNoodles className='icon' />
                    <h4>Thai</h4>
                </Item>
                <Item to={"cuisine/nordic"}>
                    <GiPig className='icon' />
                    <h4>Noric</h4>
                </Item>
            </List>
        </>
    );
}

const List = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    .icon {
        cursor: pointer;
        font-size: 2rem;
        margin-bottom: 1rem;
        color: #dddaa5;
    }

    h4 {
        color: #dddaa5;
    }
`;

const Item = styled(NavLink)`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 1rem 1rem 0% 1rem;
    padding: 1rem;
    text-decoration: none;

    &.active {
        svg {
            color: #db5a2f;
        }

        h4 {
            color: #db5a2f;
        }
    }
`;

export default Categories;
