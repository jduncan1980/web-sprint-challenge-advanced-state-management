import React, { Component } from 'react';
import './App.css';
import { Container, Heading } from 'theme-ui';
import SmurfCardContainer from './SmurfCardContainer';
import AddSmurfForm from './AddSmurfForm';
class App extends Component {
	render() {
		return (
			<Container>
				<Heading as='h1' sx={{ fontSize: [5, 6, 7, 8, 9], marginY: '40px' }}>
					My Favorite Smurfs
				</Heading>
				<SmurfCardContainer />
				<AddSmurfForm />
			</Container>
		);
	}
}

export default App;
