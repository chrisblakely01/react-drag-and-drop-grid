import * as types from '../actions/actionTypes';

const shiftsReducer = (state = [], action) => {
	switch (action.type) {
		// case types.GET_SHIFTS:
		// 	return action.shifts;

		default:
			return state;
	}
};

export default shiftsReducer;