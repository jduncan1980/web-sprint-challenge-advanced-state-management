import { createStore, applyMiddleware } from 'redux';
import { smurfsReducer } from './reducers/smurfsReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
	smurfsReducer,
	composeWithDevTools(applyMiddleware(thunk))
);

export default store;
