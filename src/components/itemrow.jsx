import React, { Component } from 'react';
class ItemRow extends Component {
    
    render() {
        return ( 
            <React.Fragment>
                <tr>
                    <td>{this.props.index+1}</td>
                    <td>{this.props.counter.productName}</td>
                    <td>{this.props.counter.value}</td>
                    <td>
                        {this.props.counter.value * this.props.counter.amount} <span style={{fontSize:10}}>( Cost per item <b>{this.props.counter.amount}</b> )</span>
                    </td>
                </tr>
            </React.Fragment>
        );
    }
}
 
export default ItemRow;