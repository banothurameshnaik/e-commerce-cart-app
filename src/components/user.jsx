import React, { Component } from 'react';
const User = (props) => {
    return ( 
        <div>
            <p>Name: {props.user.name.first} {props.user.name.last}</p>
            <p>Email: {props.user.email}</p>
        </div>
     );
}
 
export default User;