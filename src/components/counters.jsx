import React, { Component } from 'react';

import Counter from './counter';

class Counters extends Component {
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

    render() { 
        return ( 
            <React.Fragment>

                <div className="btn btn-sm btn-primary m-4" onClick={this.handleReset} >Reset</div>

                {this.state.counters.map(counter => 
                    <Counter 
                        key={counter.id} 
                        counter={counter} 
                        onDelete={this.handleDelete}
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}
                    /> )}
            </React.Fragment> 
        );
    }
}
 
export default Counters;