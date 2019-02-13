import * as types from './actionTypes';

export const addShiftToCellSuccess = shift => ({
	type: types.ADD_SHIFT_TO_CELL,
	shift,
});

export const addShiftToCell = shift => (dispatch) => {
	dispatch(addShiftToCellSuccess(shift));
};