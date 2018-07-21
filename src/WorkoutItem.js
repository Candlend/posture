import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import tileData from "./workoutTileData";

const style = {
	root: {
		paddingBottom: 100
	}
};

export default class Workout extends React.Component {
	render() {
		const tile = tileData[this.props.itemId];

		const currPage = this.props.home.state.page;

		return (
			<div style={style.root}>
				<Card>
					<CardMedia
						style={{
							height: 50,
    						paddingTop: '56.25%'
    					}}
						image={tile.img}
						title={tile.title}
					/>
					<CardContent>
						<Typography gutterBottom variant="headline" component="h2">
							{tile.title}
						</Typography>
						<Typography component="p">
							{tile.description}
						</Typography>
					</CardContent>
					<CardActions>
						<Button size="small" color="primary">
							Share
						</Button>
						<Button size="small" color="primary">
							Learn More
						</Button>
						<Button
							size="small"
							color="primary"
							onClick={() => {
								this.props.home.setState({page: this.props.home.state.prePage, prePage: currPage});
							}}
						>
							Back
						</Button>
					</CardActions>
				</Card>
			</div>
		);
	}
}
