import React, { Component } from 'react';

class NavBar extends Component {
    
    render() { 
        return ( 
            // <!-- As a heading -->
            <React.Fragment>
                <nav className="navbar navbar-light bg-light">
                    <span className="navbar-brand mb-0 h1">Simple E-Commerce Application</span>
                    <a className="navbar-brand" href="#">Items <span className="badge badge-pill badge-secondary">{this.props.totalCartsCount}</span> </a>
                </nav>
            </React.Fragment>
         );
    }
}
 
export default NavBar;