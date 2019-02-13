import * as types from './actionTypes';

export const addShiftToCellSuccess = data => ({
	type: types.ADD_SHIFT_TO_CELL,
	data,
});


export const addShiftToCell = (shift, cell) => (dispatch) => {
	const data = { shift, cell };
	dispatch(addShiftToCellSuccess(data));
	fetch('http://localhost:3000/shifts')
		.then()
		.catch(function (err) {
			dispatch(removeShiftFromCell(data));
		});

};

export const removeShiftFromCellSuccess = data => ({
	type: types.REMOVE_SHIFT_FROM_CELL,
	data,
});


export const removeShiftFromCell = (cell) => (dispatch) => {
	const data = { cell };
	dispatch(removeShiftFromCellSuccess(data));
};