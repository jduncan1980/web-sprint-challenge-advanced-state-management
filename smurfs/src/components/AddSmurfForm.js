import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions/addSmurf';
import { Flex, Button, Field, Heading } from 'theme-ui';

const initialSmurf = {
	name: '',
	age: '',
	height: '',
};

function AddSmurfForm(props) {
	const [newSmurf, setNewSmurf] = useState(initialSmurf);

	const handleSubmit = (e) => {
		e.preventDefault();
		props.addSmurf(newSmurf);
		setNewSmurf(initialSmurf);
	};

	const handleChange = (e) => {
		e.preventDefault();
		setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value });
	};

	return (
		<Flex
			as='form'
			onSubmit={handleSubmit}
			sx={{
				flexDirection: 'column',
				background: '#083242',
				padding: '30px',
				margin: '15px',
				borderRadius: '15px',
				width: ['90%', null, null, '50%'],
			}}
		>
			<Heading as='h2' sx={{ marginY: '30px', textAlign: 'center' }}>
				Add A New Smurf!
			</Heading>
			<Field
				variant='forms.fields'
				label='Name'
				name='name'
				value={newSmurf.name}
				onChange={handleChange}
				data-testid='smurf-name'
			/>
			<Field
				variant='forms.fields'
				label='Age'
				name='age'
				value={newSmurf.age}
				onChange={handleChange}
				data-testid='smurf-age'
			/>
			<Field
				variant='forms.fields'
				label='Height'
				name='height'
				value={newSmurf.height}
				onChange={handleChange}
				data-testid='smurf-height'
			/>

			<Button type='submit' data-testid='smurf-submit'>
				Submit
			</Button>
		</Flex>
	);
}

const mapStateToProps = (state) => {
	return state;
};
export default connect(mapStateToProps, { addSmurf })(AddSmurfForm);
