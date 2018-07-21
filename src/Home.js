import React from 'react';
import Button from '@material-ui/core/Button';
import Bottom from './Bottom';
import Header from "./Header";
import Camera from "./Camera"

export default class Home extends React.Component {
	state = {
		mode: "app"
	};

	render() {
		if (this.state.mode === "app") {
			return (
				<div>
					<Header />

					<Button variant="raised" color="primary" onClick={() => {
						this.setState({mode: "camera"});
					}}>
						Hello World!
					</Button>

					<Bottom />
				</div>
			);
		} else {
			return (
				<Camera />
			);
		}
	}
}
