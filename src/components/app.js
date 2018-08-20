//"use strict";
/*eslint-disable strict*/ // Disabling check because we can't run in strict mode. Need global vars!

$ = jQuery = require('jquery');
var React = require('react');
var Header = require('./common/header');
var RouteHandler = require('react-router').RouteHandler;


var App = React.createClass({
	render: function(){
		return (
			<div>
				<Header/>
				<div className="container-fluid">
					<RouteHandler/>
				</div>
			</div>
		);

	}
});

module.exports = App;