import React, { Component } from 'react';
import './../errorStyle.css';

class ErrorPage extends Component {
    render() { 
        return ( 
            <div id="notfound">
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>404</h1>
                        <h2>Page not found</h2>
                    </div>
                    <a href="/">Homepage</a>
                </div>
            </div>
         );
    }
}
 
export default ErrorPage;