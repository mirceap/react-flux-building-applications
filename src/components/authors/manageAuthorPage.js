"use strict";

var React = require('react');
var AuthorForm = require('./authorForm');

var ManageAuthorPage = React.createClass({
	getInitialState: function() {
		return {
			author: { id: '', firstName: '', lastName: '' }
		};
	},

	setAuthorState: function(event) {
			var filed = event.target.name;
			var value = event.target.value;
			this.state.author[filed] = value;
			return this.setState({author: this.state.author});
	},


	render: function() {
		return (
				<AuthorForm 
					author={this.state.author}
					onChange={this.setAuthorState} />
		);
	}
});

module.exports = ManageAuthorPage;