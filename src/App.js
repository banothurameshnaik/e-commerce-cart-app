import React, { Component } from 'react';
import './App.css';
import NavBar  from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
	state = { 
		counters : [
				{ id : 1, value: 0},
				{ id : 2, value: 1},
				{ id : 3, value: 2},
				{ id : 4, value: 3},

		]
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
			const counters = this.state.counters.filter(c => c.id !== counterId);
			this.setState({counters});
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
			alert("Called Shoping Handler");
	}
	render() {
		return (
			<React.Fragment>
				<NavBar totalCartsCount={this.state.counters.filter(c => c.value > 0).length} />
				<main className="container">
					<Counters 
						counters={this.state.counters}
						onDelete={this.handleDelete}
                        onIncrement={this.handleIncrement}
						onDecrement={this.handleDecrement}
						onReset={this.handleReset}
						onShop={this.handleShop}
					/>
				</main>
			</React.Fragment>
		);
	}
}

export default App;
