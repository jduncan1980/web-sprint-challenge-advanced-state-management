import React from 'react';
import { Card, Heading, Text, Close } from 'theme-ui';
import { deleteSmurf } from '../actions/deleteSmurf';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function SmurfCard({ smurf, ...props }) {
	return (
		<Card variant='primary'>
			<Close
				onClick={() => props.deleteSmurf(smurf.id)}
				sx={{ cursor: 'pointer' }}
			/>
			<Heading>Name: {smurf.name}</Heading>
			<Text>Age: {smurf.age}</Text>
			<Text>Height: {smurf.height}</Text>
			<Link to={`/${smurf.id}`}>Go To Profile</Link>
		</Card>
	);
}

const mapStateToProps = (state) => {
	return {};
};

export default connect(mapStateToProps, { deleteSmurf })(SmurfCard);
