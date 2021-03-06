import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import StarIcon from '@material-ui/icons/Star';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import "./css/Bottom.css";


export default class Bottom extends React.Component {
	state = {
		selected: 0
	};

	render() {
		return (
			<BottomNavigation
				value={this.state.selected}
				onChange={this.handleChange}
				showLabels
				className="Bottom"
				color="secondary"
			>
				<BottomNavigationAction value={0} label="Workout" icon={<FlashOnIcon />} />
				<BottomNavigationAction value={1} label="Moments" icon={<StarIcon />} />
				<BottomNavigationAction value={2} label="Notification" icon={<AddAlertIcon />} />
				<BottomNavigationAction value={3} label="Account" icon={<AccountCircleIcon />} />
			</BottomNavigation>
      )
	}

	handleChange = (e, v) => {
		this.setState({
			selected: v
		});
		
		if (v === 0) {
			this.props.home.setState({page: "workout"});
		} else if (v === 1) {
			this.props.home.setState({page: "moments"});
		} else if (v === 2) {
			this.props.home.setState({page: "notification"});
		} else if (v === 3) {
			this.props.home.setState({page: "account"});
		}
	}
}