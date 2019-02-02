import React from 'react';
import {NavLink} from 'react-router-dom';


// Statless Functional Components
const NavBar = ( {totalCartsCount} ) => {
    return ( 
        // <!-- As a heading -->
        <React.Fragment>
            <nav className="navbar navbar-light bg-light">
                <NavLink to="/" className="navbar-brand">
                    <span className="navbar-brand mb-0 h1">Simple E-Commerce Application</span>
                </NavLink>
                <NavLink to="/cart" className="navbar-brand">
                    Cart&nbsp;<span className="badge badge-pill badge-secondary">
                        {totalCartsCount}
                    </span>
                </NavLink>
            </nav>
        </React.Fragment>
     );
}
 
export default NavBar;