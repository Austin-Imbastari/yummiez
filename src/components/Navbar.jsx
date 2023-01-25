import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <>
            <NavbarContainer>
                <div className='border'>
                    <Title to='/'>
                        <h2>Yummiez</h2>
                    </Title>
                </div>
            </NavbarContainer>
        </>
    );
}

const NavbarContainer = styled.div`
    h2 {
        /* color: #db5a2f; */
        color: #dddaa5;
    }
    padding: 1rem;
    .border {
        margin-top: 10px;
        border-bottom: 0.5px solid #dddaa5;

        padding: 1rem;
    }
`;

const Title = styled(NavLink)`
    text-decoration: none;
`;

export default Navbar;
