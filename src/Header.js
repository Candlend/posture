import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const style = {
	flex: {flexGrow: 1}
}

class Header extends React.Component {
	state = {
		anchorEl: null
	};

	render() {
		return (
			<AppBar position="static">
				<Toolbar>
					<AppBarMenu
						id="0"
						menuItems={[
							"Feedback",
							"About"
						]}
					/>
					<Typography variant="title" color="inherit" style={style.flex}>
						Posture
					</Typography>
					<AppBarMenu
						id="1"
						menuItems={[
							"Profile",
							"Notification",
							"Settings",
							"Favorites"
						]}
						icon={<AccountCircle />}
					/>
				</Toolbar>
			</AppBar>
		);
	}
}

class AppBarMenu extends React.Component {
	state = {
		anchorEl: null
	};

	handleMenu = (event) => {
		this.setState({anchorEl: event.currentTarget});
	};

	handleClose = (event) => {
		this.setState({anchorEl: null});
	};

	render() {
		const open = Boolean(this.state.anchorEl);

		let menuItems = this.props.menuItems.map((o, i) => {
			return <MenuItem key={i} onClick={this.handleClose}>{o}</MenuItem>
		});

		return (
			<div>
				<IconButton
					aria-haspopup="true"
					aria-owns={open ? 'menu-appbar' + this.props.id : null}
					onClick={this.handleMenu}
					color="inherit"
				>
					<MenuIcon />
				</IconButton>
				<Menu
					id={"menu-appbar" + this.props.id}
					open={open}
					anchorEl={this.state.anchorEl}
					anchorOrigin={{
						vertical: 'top',
						horizontal: 'right'
					}}
					transformOrigin={{
						vertical: 'top',
						horizontal: 'right'
					}}
					onClose={this.handleClose}
				>
					{menuItems}
				</Menu>
			</div>
		);
	}
}

export default Header;