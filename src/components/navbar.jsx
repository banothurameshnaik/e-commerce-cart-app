import React, { Component } from 'react';


// Statless Functional Components
const NavBar = (props) => {
    return ( 
        // <!-- As a heading -->
        <React.Fragment>
            <nav className="navbar navbar-light bg-light">
                <span className="navbar-brand mb-0 h1">Simple E-Commerce Application</span>
                <a className="navbar-brand" href="#">Cart &nbsp;
                    <span className="badge badge-pill badge-secondary">
                        {props.totalCartsCount}
                    </span>
                </a>
            </nav>
        </React.Fragment>
     );
}
 
export default NavBar;