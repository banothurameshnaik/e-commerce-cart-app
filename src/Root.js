import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Instuctions from './components/instructions';
import Footer from './components/footer';
import NavBar from './components/navbar';
import ErrorPage from './components/errorPage';
import User from './components/user';

const API_URL = 'https://randomuser.me/api/?results=5';

class Root extends Component {

    state = {
        users: undefined
    }

    componentDidMount() {
        this.getUsersData();
    }

    getUsersData = async () => {
        const api_call = await fetch(API_URL);
        const data = await api_call.json();
        this.setState({users: data.results});
        console.log(this.state.users);
    }

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
                    { this.state.users && this.state.users.map((user, index) => <User key={index} user={user}/>) }
                </React.Fragment>
            </BrowserRouter>
         );
    }
}
 
export default Root;