import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import SmurfCard from './SmurfCard';
import { Container, Spinner, Message } from 'theme-ui';
import { getSmurfs } from '../actions/getSmurfs';

function SmurfCardContainer(props) {
	useEffect(() => {
		props.getSmurfs();
	}, []);

	if (props.isLoading) {
		console.log('loading');
		return (
			<React.Fragment>
				<Spinner />
				<span>Loading</span>
			</React.Fragment>
		);
	}

	return (
		<Container variant='cardContainer'>
			{props.smurfs.map((smurf) => {
				return <SmurfCard key={smurf.id} smurf={smurf} />;
			})}
			{props.error && (
				<Message sx={{ marginTop: '50px' }}>{props.error}</Message>
			)}
		</Container>
	);
}

const mapStateToProps = (state) => {
	return {
		smurfs: state.smurfs,
		isLoading: state.isLoading,
		error: state.error,
	};
};

export default connect(mapStateToProps, { getSmurfs })(SmurfCardContainer);
