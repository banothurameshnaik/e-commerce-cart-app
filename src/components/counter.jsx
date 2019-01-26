import React, { Component } from 'react';

class Counter extends Component {

    state = {
        value: this.props.counter.value
    }


    handleIncrement = (params) => {
        this.setState({value: (params.action === 1) ? this.state.value+1 : this.state.value-1});
    };

    render() {

        return ( 
            <div>
                <span style={{minWidth: 42}} className={this.getBadgeClasses()} >{ this.formatCount() }</span>
                <button onClick={ () => this.handleIncrement({action:1})} className="btn btn-secondary btn-sm m-4" disabled={this.state.value === 3} >+</button>
                <button onClick={ () => this.handleIncrement({action:2})} className="btn btn-secondary btn-sm m-4" disabled={this.state.value === 0}>-</button>
                <button onClick={ () => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-4">Delete</button>
            </div>
         );
    }

    getBadgeClasses() {
        let badgeClasses = "badge badge-pill m-2 badge-";
        return badgeClasses += (this.state.value === 0) ? "warning" : "primary";
    }

    formatCount() {
        return (this.state.value === 0) ? "Zero" : this.state.value;
    }
}
 
export default Counter;