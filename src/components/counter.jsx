import React, { Component } from 'react';

class Counter extends Component {

    componentDidUpdate(prevPops, prevState) {
        // Component is updated
        console.log('Prev Pops', prevPops);
        
        // We can update the component by comparing prev pops and states and get new data through ajax calls
    }

    componentWillMount() {
        // This method will be called before component is going to delete

        // Ajax calls to remove list etc
    }

    render() {

        return ( 
            <div>
                <span style={{minWidth: 42, fontWeight: "bold", margin: 10, paddingTop: 3, textAlign: "center"}}>{ this.props.counter.productName }</span>
                <span style={{minWidth: 42}} className={this.getBadgeClasses()} >{ this.formatCount() }</span>
                <button onClick={ () => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm m-4" disabled={this.props.counter.value === 3} >Add</button>
                <button onClick={ () => this.props.onDecrement(this.props.counter)} className="btn btn-secondary btn-sm m-4" disabled={this.props.counter.value === 0}>Remove</button>
                <button onClick={ () => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-4">Delete</button>
            </div>
         );
    }

    getBadgeClasses() {
        let badgeClasses = "badge badge-pill m-2 badge-";
        return badgeClasses += (this.props.counter.value === 0) ? "warning" : "primary";
    }

    formatCount() {
        return (this.props.counter.value === 0) ? "Zero" : this.props.counter.value;
    }
}
 
export default Counter;