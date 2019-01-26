import React from 'react';

const Instuctions = () => {
    return ( 
        <div className="col-md-6" style={{marginTop:50}}>
            <h3>Instructions: </h3>
            <div className="alert alert-success">
                <ul>
                    <li>Maximum of three items can be added into list from each product.</li>
                    <li>You can delete the product from shopping cart also</li>
                    <li>Currently ayment is offline only! Please pay through cash.</li>
                </ul>
            </div>
        </div>
     );
}
 
export default Instuctions;