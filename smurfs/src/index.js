import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import store from './store';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'theme-ui';
import theme from './theme';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<Router>
				<App />
			</Router>
		</ThemeProvider>
	</Provider>,
	document.getElementById('root')
);
