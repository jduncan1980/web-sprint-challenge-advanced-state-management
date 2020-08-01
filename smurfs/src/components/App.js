import React, { Component } from 'react';
import './App.css';
import { Container } from 'theme-ui';
import SmurfCardContainer from './SmurfCardContainer';
import AddSmurfForm from './AddSmurfForm';
class App extends Component {
	render() {
		return (
			<Container>
				<SmurfCardContainer />
				<AddSmurfForm />
			</Container>
		);
	}
}

export default App;
