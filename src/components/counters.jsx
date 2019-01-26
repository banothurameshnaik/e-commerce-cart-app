import React, { Component } from 'react';

import Counter from './counter';

class Counters extends Component {
    
    render() { 
        return ( 
            <React.Fragment>

                <div className="btn btn-sm btn-info m-4" onClick={this.props.onReset} >Reset</div>
                <div className="btn btn-sm btn-primary m-4" onClick={this.props.handleShop} >Shop</div>
                
                {this.props.counters.map(counter => 
                    <Counter 
                        key={counter.id} 
                        counter={counter} 
                        onDelete={this.props.onDelete}
                        onIncrement={this.props.onIncrement}
                        onDecrement={this.props.onDecrement}
                    /> )}
            </React.Fragment> 
        );
    }
}
 
export default Counters;