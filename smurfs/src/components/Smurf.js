import React, { useEffect } from 'react';
import SmurfCard from './SmurfCard';
import { connect } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getSmurfs } from '../actions/getSmurfs';

function Smurf(props) {
	useEffect(() => {
		props.getSmurfs();
	}, []);

	let slug = useParams();

	return (
		<div>
			{props.smurfs.length > 0 && <SmurfCard smurf={props.smurfs[slug.id]} />}
			<Link to='/'>Go Back</Link>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		smurfs: state.smurfs,
	};
};

export default connect(mapStateToProps, { getSmurfs })(Smurf);
