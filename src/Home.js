import React from 'react';
import Bottom from './Bottom';
import Header from "./Header";
import Content from "./Content";
import Camera from "./Camera";

export default class Home extends React.Component {
	state = {
		appMode: true,
		page: "workout",
		prePage: null
	};

	render() {
		if (this.state.appMode) {
			return (
				<div>
					<Header />
					<Content home={this} page={this.page}/>
					<Bottom home={this} />
				</div>
			);
		} else {
			return (
				<Camera home={this} />
			);
		}
	}
}
