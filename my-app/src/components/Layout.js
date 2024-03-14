import React from 'react';
import Navbar from './Navbar';


function Layout(props){
    return (
        <>
            <Navbar></Navbar>
            {props.children}
        </>
    )
}


export default Layout