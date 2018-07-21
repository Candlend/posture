import React from 'react';
import Button from '@material-ui/core/Button';
import Bottom from './Bottom';
import Header from "./Header";

export default class Home extends React.Component {
	render() {
		return (
			<div>
				<Header />
				
				<Button variant="raised" color="primary">
					Hello World!
				</Button>

				<Bottom />
			</div>
		);
	}
}
