import React, { Component } from 'react';
import './App.css';
import { Container, Heading } from 'theme-ui';
import SmurfCardContainer from './SmurfCardContainer';
import AddSmurfForm from './AddSmurfForm';
import { Route } from 'react-router-dom';
import Smurf from './Smurf';
class App extends Component {
	render() {
		return (
			<Container>
				<Route exact path='/'>
					<Heading as='h1' sx={{ fontSize: [5, 6, 7, 8, 9], marginY: '40px' }}>
						My Favorite Smurfs
					</Heading>
					<SmurfCardContainer />
					<AddSmurfForm />
				</Route>
				<Route path='/:id'>
					<Smurf />
				</Route>
			</Container>
		);
	}
}

export default App;
