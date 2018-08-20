"use strict";

var React = require('react');

var Header = React.createClass({
	render: function(){
		return (
				<nav className="navbar navbar-default">
					<div className="containter-fluid">
						<a href="/" className="navbar-brand">
							<img width={100} height={60} src="images/pluralsight-logo.png" />
						</a>
						<ul className="nav navbar-nav">
							<li><a href="/">Home</a></li>
							<li><a href="/#authors">Authors</a></li>
							<li><a href="/#about">About</a></li>
						</ul>
					</div>
				</nav>
			);
	}
});


module.exports = Header;