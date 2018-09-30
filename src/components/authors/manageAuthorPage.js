"use strict";

var React = require('react');
var AuthorForm = require('./authorForm');

var ManageAuthorPage = React.createClass({
	getInitialState: function() {
		return {
			author: { id: '', firstName: '', lastName: ''}
		};
	},

	setAuthorState: function(event) {
			var filed = event.target.name;
			var value = event.target.value;
			this.state.author[filed] = value;
			return this.setState({author: this.state.author});
	},


	render: function() {
		console.log("In manager:");
		console.log(this.state.author);
		return (
				<AuthorForm 
					authorData={this.state.author}
					onChange={this.setAuthorState}/>
		);
	}
});

module.exports = ManageAuthorPage;