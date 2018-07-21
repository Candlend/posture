import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import "./css/Bottom.css";


export default class Bottom extends React.Component {
	render() {
		return (
			<BottomNavigation
				value="Recents"
				onChange={this.handleChange}
				showLabels
				className="Bottom"
			>
				<BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
				<BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
				<BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
			</BottomNavigation>
      )
	}

	handleChange() {

	}
}