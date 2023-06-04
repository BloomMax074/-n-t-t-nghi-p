import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import NavBar from './NavBar';

function Menu() {
    const match = useRouteMatch();
    let checkMenu = match.isExact;
    return (
        <>
        <NavBar class={`menu ${checkMenu ? "" : "notMenu"}`} />
        </>
    );
}

export default Menu;
