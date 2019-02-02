import React, { Component } from 'react';
import Counters from "./counters";
import Instuctions from "./instructions";

class Home extends Component {
    render() { 
        return (
            <main className="container">
				{/* Main Page Display Here */}
                <div className="row">
                    {/* Shoping Car */}
                    <div className="col-md-6">
                        <Counters 
                            counters={this.props.counters}
                            onDelete={this.props.onDelete}
                            onIncrement={this.props.onIncrement}
                            onDecrement={this.props.onDecrement}
                            onReset={this.props.onReset}
                        />
                    </div>
                    {/* Instructions */}
                    <Instuctions />
                </div>
            </main>
         );
    }
}
 
export default Home;