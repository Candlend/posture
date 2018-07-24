import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

export default class Moment extends React.Component {
	render() {
		return (
			<Grid
				container
				style={{
					marginTop: 20
				}}
				alignItems="center"
				direction="row"
				justify="center"
			>
				<Paper elevation={1} style={{padding: 30}}>
					<Typography variant="headline" component="h3">
						No moment yet!
					</Typography>
				</Paper>
			</Grid>
		);
	}
}
