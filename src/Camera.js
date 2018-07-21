import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import StopIcon from '@material-ui/icons/Stop';


const style = {
	bottom: {
		position: "fixed",
		bottom: 50,
		width: "100%",
	},

	iconButtons: {
		margin: 10
	}
};

class Camera extends React.Component {
	render() {
		return (
			<div style={{width: "100vw", height: "100vh", background: "#000000"}}>
				<CameraBottom style={style.bottom} />
			</div>
		);
	}
}

class CameraBottom extends React.Component {
	render() {
		return (
			<Grid
				container
				justify="center"
				direction="row"
				alignItems="center"
				style={style.bottom}
			>
				<Button variant="fab" color="primary" aria-label="Start" style={style.iconButtons}>
					<PlayArrowIcon />
				</Button>
				<Button variant="fab" color="secondary" aria-label="Stop" style={style.iconButtons}>
					<StopIcon />
				</Button>
				<Button variant="extendedFab" aria-label="Delete" style={style.iconButtons}>
					<ArrowBackIcon />
					Back
				</Button>
			</Grid>
		);
	}
}

export default Camera;