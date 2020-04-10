import React, { Component } from 'react';
import Teams from './components/Teams';
import AddTeam from './components/AddTeam';

class App extends Component {
	state = {
		teams: [
			{ id: 1, name: 'Julie', age: 41 },
			{ id: 2, name: 'Harari', age: 52 },
			{ id: 3, name: 'BlueBell', age: 22 },
			{ id: 3, name: 'Marle', age: 33 }
		]
	};
	addTeam = (team) => {
		const length = this.state.teams.length;
		team.id = this.state.teams[length - 1].id + 1;

		// 1st way
		// const teams = [ ...this.state.teams ];
		// teams.push(team);
		// this.setState({
		// 	teams
		// });

		// 2nd way
		// this.setState({
		// 	teams: this.state.teams.concat(team)
		// });

		// 3rd way

		this.setState((prevState) => ({
			teams: prevState.teams.concat(team)
		}));
	};
	deleteTeam = (id) => {
		this.setState((prevState) => ({
			teams: prevState.teams.filter((team) => team.id !== id)
		}));
	};
	// Lifecycle React 
	componentDidMount() {
		console.log('Component Mounted')
	};
	componentDidUpdate(prevProps, prevState) {
		console.log('Component Updated');
		console.log(prevProps);
		console.log(prevState);
	}
	render() {
		return (
			<div className='App'>
				<h1>This is my react app</h1>
				<p>Hello How are you?</p>
				<Teams teams={this.state.teams} deleteTeam={this.deleteTeam} />
				<AddTeam addTeam={this.addTeam} />
			</div>
		);
	}
}

export default App;
