import React from 'react';
import { useRouterMatch } from 'react-router-dom';
import NavBar from './NavBar';

function Menu() {
    const match = useRouterMatch();
    let checkMenu = match.isExact;
    return (
        <>
        <NavBar class={`menu ${checkMenu ? "" : "notMenu"}`} />
        </>
    );
}

export default Menu;
