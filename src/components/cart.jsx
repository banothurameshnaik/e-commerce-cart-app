import React, { Component } from 'react';

import ItemRow from './itemrow';

class Cart extends Component {
	render() { 
		return (
			<React.Fragment>
				<main className="container">
					<div className="row" style={{paddingTop:60}}>
						<h3>Product Cart Page</h3>
						<table className="table table-striped table-bordered table-hover">
						<thead>
							<tr>
								<th>S.No</th>
								<th>Product Name</th>
								<th>Items</th>
								<th>Amount</th>
							</tr>
						</thead>
						<tbody>
							{this.props.counters.filter(c => c.value > 0).map( (counter,index) => 
								<ItemRow 
									key={counter.id}
									index={index}
									counter={counter}
								/>
								)}
							<tr>
								<th>Summary</th>
								<th></th>
								<th>{this.props.getTotalItemsCount}</th>
								<th>{this.props.getTotalCartsAmount}</th>
							</tr>
						</tbody>
					</table>
					</div>
				</main>
			</React.Fragment>
		);
	}
}
 
export default Cart;