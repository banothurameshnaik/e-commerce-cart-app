import React, { Component } from 'react';
import Counters from "./counters";
import Instuctions from "./instructions";

class Home extends Component {
    render() { 
        return (
            <div className="row">
                {/* Shoping Car */}
                <div className="col-md-6">
                    <Counters 
                        counters={this.props.counters}
                        onDelete={this.props.onDelete}
                        onIncrement={this.props.onIncrement}
                        onDecrement={this.props.onDecrement}
                        onReset={this.props.onReset}
                        onShop={this.props.onShop}
                    />
                </div>
                {/* Instructions */}
                <Instuctions />
            </div>
         );
    }
}
 
export default Home;