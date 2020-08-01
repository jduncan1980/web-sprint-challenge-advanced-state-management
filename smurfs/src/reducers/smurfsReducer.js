import {
	GET_SMURFS_START,
	GET_SMURFS_SUCCESS,
	GET_SMURFS_ERROR,
} from '../actions/getSmurfs';
import {
	ADD_SMURF_START,
	ADD_SMURF_SUCCESS,
	ADD_SMURF_ERROR,
} from '../actions/addSmurf';
import {
	DELETE_SMURF_START,
	DELETE_SMURF_SUCCESS,
	DELETE_SMURF_ERROR,
} from '../actions/deleteSmurf';

const initialState = {
	smurfs: [],
	isLoading: false,
	error: '',
};

export const smurfsReducer = (state = initialState, action) => {
	switch (action.type) {
		//GET SMURFS
		case GET_SMURFS_START:
			return {
				...state,
				isLoading: true,
			};
		case GET_SMURFS_SUCCESS:
			return {
				...state,
				isLoading: false,
				error: '',
				smurfs: [...action.payload],
			};
		case GET_SMURFS_ERROR:
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};

		//ADD NEW SMURF
		case ADD_SMURF_START:
			return {
				...state,
				isLoading: true,
			};
		case ADD_SMURF_SUCCESS:
			return {
				...state,
				isLoading: false,
				smurfs: [...action.payload],
				error: '',
			};
		case ADD_SMURF_ERROR:
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};

		//DELETE SMURF
		case DELETE_SMURF_START:
			return {
				...state,
				isLoading: true,
			};

		case DELETE_SMURF_SUCCESS:
			return {
				...state,
				smurfs: [...action.payload],
				isLoading: false,
				error: '',
			};

		case DELETE_SMURF_ERROR:
			return {
				...state,
				error: action.payload,
				isLoading: false,
			};
		default:
			return state;
	}
};
