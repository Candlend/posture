import React from 'react';
import Workout from "./Workout";
import WorkoutItem from "./WorkoutItem";
import Notification from "./Notification";
import Moment from "./Moment";
import Account from "./Account";


export default class Content extends React.Component {
	state = {
		workoutItemId: -1
	};

	render() {	
		const currPage = this.props.home.state.page;
	
		if (currPage === "workout") {
			return (
				<Workout home={this.props.home} parent={this} />
			);
		} else if (currPage === "workout_item") {
			return (
				<WorkoutItem home={this.props.home} itemId={this.state.workoutItemId} />
			);
		} else if (currPage === "notification") {
			return (
				<Notification />
			);
		} else if (currPage === "moments") {
			return (
				<Moment />
			);
		} else if (currPage === "account") {
			return (
				<Account />
			);
		}
	}
}
