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
			{ id : 1, value: 0, productName: "A", amount: 10},
			{ id : 2, value: 1, productName: "B", amount: 20},
			{ id : 3, value: 0, productName: "C", amount: 30},
			{ id : 4, value: 3, productName: "D", amount:3},
			{ id : 5, value: 0, productName: "E", amount:6},
		]
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
							render={(props) => <Cart {...props} 
							counters={this.state.counters}
							totalCartsCount={this.getTotalCartsCount()}
							getTotalCartsAmount={this.getTotalCartsAmount()}
							getTotalItemsCount={this.getTotalItemsCount()}
							/>}
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

	getTotalItemsCount() {
		let totalItemsCount = 0;
		this.state.counters.forEach((counter) => {
			totalItemsCount += counter.value;
		});
		return totalItemsCount;
	}

	getTotalCartsAmount() {
		let totalCartsAmount = 0;
		this.state.counters.forEach((counter) => {
			totalCartsAmount += (counter.value * counter.amount);
		});
		return totalCartsAmount;
	}

	componentDidMount(props) {
		// Place to do ajax calls and update the state
		document.title = TITLE;
		// console.log(props);
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
