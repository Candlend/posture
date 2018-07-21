import React from 'react';
import Workout from "./Workout";
import WorkoutItem from "./WorkoutItem";

export default class Content extends React.Component {
	state = {
		workoutItemId: -1
	};

	render() {	
		// return (
		// 	<Button variant="raised" color="primary" onClick={() => {
		// 		this.props.home.setState({appMode: false});
		// 	}}>
		// 		Hello World!
		// 	</Button>
		// );

		const currPage = this.props.home.state.page;
	
		if (currPage === "workout") {
			return (
				<Workout home={this.props.home} parent={this} />
			);
		} else if (currPage === "workout_item") {
			return (
				<WorkoutItem home={this.props.home} itemId={this.state.workoutItemId} />
			);
		}
	}
}
