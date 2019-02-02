import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import NavBar  from "./components/navbar";
import Home from './components/home';
import Footer from './components/footer';
import Cart from './components/cart';
import ErrorPage from './components/errorPage';

const TITLE = "Simple E-Commerce Application";
class App extends Component {

	state = {
		counters : [
			{ id : 1, value: 0, productName: "A"},
			{ id : 2, value: 1, productName: "B"},
			{ id : 3, value: 0, productName: "C"},
			{ id : 4, value: 3, productName: "D"},
			{ id : 5, value: 0, productName: "E"},
		]
	}

	constructor(props) {
		super(props);
		// Place to set initial property of state attributes
		// console.log("App - Constructor", props);
	}

	render() {
		return (
			<BrowserRouter>
				<React.Fragment>
					<NavBar totalCartsCount={this.getTotalCartsCount()} />
					<Switch>
						<Route  path="/" exact 
							render={ (props) => 
									<Home
										{...props}
										counters={this.state.counters}
										onDelete={this.handleDelete}
										onIncrement={this.handleIncrement}
										onDecrement={this.handleDecrement}
										onReset={this.handleReset}
									/> 
							}
						/>
						<Route path="/cart" exact
							render={(props) => <Cart {...props} totalCartsCount={this.getTotalCartsCount()} />}
						/>
						<Route component={ErrorPage} />
					</Switch>
					<Footer />
				</React.Fragment>
			</BrowserRouter>
		);
	}

	getTotalCartsCount() {
		return this.state.counters.filter(c => c.value > 0).length;
	}

	componentDidMount(props) {
		// Place to do ajax calls and update the state
		document.title = TITLE;
		console.log(props);
	}

	handleIncrement = (counter) => {
		const counters = [...this.state.counters];
		let index = counters.indexOf(counter);
		counters[index] = { ...counter }
		counters[index].value++;
		this.setState({counters});
	};

	handleDecrement = (counter) => {
		const counters = [...this.state.counters];
		let index = counters.indexOf(counter);
		counters[index] = { ...counter }
		counters[index].value--;
		this.setState({counters});
	}

	handleDelete = (counterId) => {

		if(window.confirm("Are you sure to delete this product")) {
			const counters = this.state.counters.filter(c => c.id !== counterId);
			this.setState({counters});
		}
	}

	handleReset = () => {
		const counters = [...this.state.counters];
		counters.map(c => {
				c.value = 0;
				return c;
		});
		this.setState({counters});
	}
}

export default App;
