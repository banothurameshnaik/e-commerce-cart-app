import React from 'react';
import {NavLink} from 'react-router-dom';

import './../Footer-with-logo.css';

const Footer = () => {
	return ( 
		<React.Fragment>
			<footer id="myFooter">
				<div className="container">
					<div className="row footer-menu">
						<div className="col-sm-3">
							{/* <h2 className="logo"><a href="#"> LOGO </a></h2> */}
						</div>
						<div className="col-sm-2">
							<h5>Get started</h5>
							<ul>
								<li>
									<NavLink to="/downloads">Downloads</NavLink>
								</li>
							</ul>
						</div>
						<div className="col-sm-2">
							<h5>About us</h5>
							<ul>
								<li><NavLink to="/about">Company Information</NavLink></li>
								<li><NavLink to="/contact">Contact us</NavLink></li>
							</ul>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-4"></div>
						<div className="col-sm-6">
							<div className="footer-copyright">
								<p>©  2019 - Site Built By <a href="https://github.com/banothurameshnaik">Mr. Ramesh Naik Banothu</a> </p>
							</div>
						</div>
						<div className="col-sm-2"></div>
					</div>
				</div>
			</footer>
		</React.Fragment>
	 );
}
 
export default Footer;