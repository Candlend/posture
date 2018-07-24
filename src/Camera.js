import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import StopIcon from '@material-ui/icons/Stop';
import Webcam from 'react-webcam';

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

export default class Camera extends React.Component {
	state = {
		previewUrl: ""
	};

	constructor() {
		super();
    	this.turnon = false;
  	}
	
	setRef = (webcam) => {
		this.webcam = webcam;
	}

	start = () => {
		if (this.turnon === true) return;
		this.turnon = true;
		this.cap = setInterval(function() {
			this.capture()
		}.bind(this),1000);
		//console.log(this.cap);
	}

	capture = () => {
		const imageSrc = this.webcam.getScreenshot();
		// console.log(imageSrc);
		fetch("http://139.219.129.146:8081", {
			body: imageSrc,
			method: 'post',
		}).then((res) => {
			console.log(res.text());
		});
	};

	end = () => {
		if (this.turnon === false) return;
		this.turnon = false;
		//console.log("ww	");
		//console.log(this.cap);
		clearInterval(this.cap);
	}
	render() {
		const videoConstraints = {
		  width: 1280,
		  height: 1280,
		  facingMode: 'user',
		};

		return (
			<div style={{width: "100vw", height: "100vh", background: "#000000"}}>
				<img src={this.state.previewUrl} style={{position: "absolute", float: "right"}} />
				<Webcam
				audio={false}
				height={window.screen.height}
				ref={this.setRef}
				screenshotFormat="image/jpeg"
				width={window.screen.width}
				videoConstraints={videoConstraints}
				/>
				<div>
					<Grid
					container
					justify="center"
					direction="row"
					alignItems="center"
					style={style.bottom}
					>
						<Button onClick={this.start} variant="fab" color="primary" aria-label="Start" style={style.iconButtons}>
							<PlayArrowIcon />
						</Button>
						<Button onClick={this.end} variant="fab" color="secondary" aria-label="Stop" style={style.iconButtons}>
							<StopIcon />
						</Button>
						<Button
							variant="extendedFab"
							aria-label="Delete"
							style={style.iconButtons}
						>
							<ArrowBackIcon />
							Back
						</Button>
					</Grid>
				</div>
			</div>
		);
  }
}

