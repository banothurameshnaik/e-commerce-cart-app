import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Instuctions from './components/instructions';
import Footer from './components/footer';
import NavBar from './components/navbar';
import ErrorPage from './components/errorPage';


class Root extends Component {
    render() { 
        return ( 
            <BrowserRouter>
                <React.Fragment>
                    <NavBar />
                    <Switch>
                        <Route path="/" exact component={NavBar} />
                        <Route path="/instrunctions" exact component={Instuctions} />
                        <Route path="/footer" exact component={Footer} />
                        <Route component={ErrorPage} />
                    </Switch>
                </React.Fragment>
            </BrowserRouter>
         );
    }
}
 
export default Root;