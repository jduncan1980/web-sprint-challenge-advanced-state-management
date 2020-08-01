import axios from 'axios';

export const ADD_SMURF_START = 'ADD_SMURF_START';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_ERROR = 'ADD_SMURF_ERROR';

export const addSmurf = (smurf) => (dispatch) => {
	dispatch({ type: ADD_SMURF_START });

	axios
		.post('http://localhost:3333/smurfs', {
			name: smurf.name,
			age: smurf.age,
			height: smurf.height,
		})
		.then((response) => {
			dispatch({ type: ADD_SMURF_SUCCESS, payload: response.data });
		})
		.catch((err) => {
			dispatch({
				type: ADD_SMURF_ERROR,
				payload: `Something went wrong... ${err.message}`,
			});
		});
};
