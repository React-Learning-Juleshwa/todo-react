import React, { Component } from 'react';

class AddTeam extends Component {
	state = {
		name: null,
		age: null
	};
	createChange = (event) => {
		this.setState({
			[event.target.id]: event.target.value
		});
	};
	toSubmit = (event) => {
		event.preventDefault();
		this.props.addTeam(this.state);
		event.target.name.value = null;
		event.target.age.value = null;
	};
	render() {
		return (
			<div>
				<form onSubmit={this.toSubmit}>
					<label htmlFor='name'>Name:</label>
					<br />
					<input type='text' id='name' onChange={this.createChange} />
					<br />
					<label htmlFor='age'>Age:</label>
					<br />
					<input type='text' id='age' onChange={this.createChange} />
					<br />
					<button>Submit</button>
				</form>
			</div>
		);
	}
}

export default AddTeam;
