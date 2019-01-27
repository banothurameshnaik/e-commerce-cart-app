import React, { Component } from 'react';
import NavBar  from "./components/navbar";
import Counters from "./components/counters";
import Instuctions from "./components/instructions";
import Footer from './components/footer';

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
		console.log("App - Constructor", props);
	}

	componentDidMount(props) {
		// Place to do ajax calls and update the state
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

	handleShop = () => {
		alert("Shoping component is under construction!");
	}
	render() {
		return (
			<React.Fragment>
				<NavBar totalCartsCount={this.state.counters.filter(c => c.value > 0).length} />
				<main className="container">
					{/* Row */}
					<div className="row">
						{/* Shoping Car */}
						<div className="col-md-6">
							<Counters 
								counters={this.state.counters}
								onDelete={this.handleDelete}
								onIncrement={this.handleIncrement}
								onDecrement={this.handleDecrement}
								onReset={this.handleReset}
								onShop={this.handleShop}
							/>
						</div>
						{/* Instructions */}
						<Instuctions />
					</div>
				</main>
				<Footer />
			</React.Fragment>
		);
	}
}

export default App;
