import axios from 'axios';

export const DELETE_SMURF_START = 'DELETE_SMURF_START';
export const DELETE_SMURF_SUCCESS = 'DELETE_SMURF_SUCCESS';
export const DELETE_SMURF_ERROR = 'DELETE_SMURF_ERROR';

export const deleteSmurf = (id) => (dispatch) => {
	dispatch({ type: DELETE_SMURF_START });
	console.log('delete smurf start');
	axios
		.delete(`http://localhost:3333/smurfs/${id}`)
		.then((response) => {
			console.log('delete smurf success');
			dispatch({ type: DELETE_SMURF_SUCCESS, payload: response.data });
			console.log(response);
		})
		.catch((err) => {
			dispatch({
				type: DELETE_SMURF_ERROR,
				payload: `Something went wrong... ${err.message}`,
			});
		});
};
