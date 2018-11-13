"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var CourseActions = require('../../actions/courseActions');
var toastr = require('toastr');

var CourseList = React.createClass({
	propTypes: {
		courses: React.PropTypes.array.isRequired
	},

	//could/should be passed down from parent via props
	deleteCourse: function(id, event) {
		event.preventDefault();
		CourseActions.deleteCourse(id);
		toastr.success('Course Deleted');
	},

	watchCourse: function(id, event) {
		event.preventDefault();
		CourseActions.watchCourse(id);
	},
	
	render: function(){
		
		var createCourseRow = function(course){
			return (
				<tr key={course.id}>
					<td><a href={course.watchHref} > Watch </a></td>
					<td><a href="#" onClick={this.deleteCourse.bind(this, course.id)}> Delete </a></td>
					<td><Link to="manageCourse" params={{id: course.id}}> {course.title} </Link></td>
					<td> {course.author.name} </td>
					<td> {course.category} </td>
					<td> {course.length} </td>
				</tr>
			);
		};

		return (
			<div>
				<table className="table">
					<thread>
						<th></th>
						<th></th>
						<th>Title</th>
						<th>Author</th>
						<th>Category</th>
						<th>Length</th>
					</thread>
					<tbody>
						{this.props.courses.map(createCourseRow, this)}
					</tbody>
				</table>
			</div>
		);
	}
});

module.exports = CourseList;