import React from 'react';
import './Teams.css';

const Teams = ({ teams, deleteTeam }) => {
	// const { teams } = props;

	// 1st way with Tenary Operator
	/*
    const teamList = teams.map(team => {
        return team.age < 30 ? (
            <div className="team" key={team.id}>
                <div>name: {team.name}</div>
                <div>age: {team.age}</div>
            </div>
        ) : null
    });
    */

	// 2nd way with if-else

	/*

    const teamList = teams.map(team => {
        if (team.age > 30) {
            return (
                <div className="team" key={team.id}>
                    <div>name: {team.name}</div>
                    <div>age: {team.age}</div>
                </div>
            )
        } else { return null }
    });

    */

	// Direct way

	return (
		<div className='team-list'>
			{teams.map((team) => {
				return team.age > 30 ? (
					<div className='team' key={team.id}>
						<div>name: {team.name}</div>
						<div>age: {team.age}</div>
						<button
							onClick={() => {
								deleteTeam(team.id);
							}}
						>
							Delete Team
						</button>
					</div>
				) : null;
			})}
		</div>
	);
};

export default Teams;
