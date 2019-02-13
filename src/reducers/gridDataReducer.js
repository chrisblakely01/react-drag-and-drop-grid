import * as types from '../actions/actionTypes';

//reducer state param maps to state name via configure store
const gridDataReducer = (state = [], action) => {
	switch (action.type) {
		case types.ADD_SHIFT_TO_CELL:
			console.log('ADDING TO CELL', action.data.cell);
			const cell = [...state[action.data.cell],
			Object.assign({}, action.data.shift)]

			let newArray = state.slice()
			newArray.splice(action.data.cell, 1, cell)
			return newArray;
		case types.REMOVE_SHIFT_FROM_CELL:

			console.log('REMOVING FROM CELL', action.data.cell);
			let arrayRemove = state.slice()
			arrayRemove.splice(action.data.cell, 1, [])
			return arrayRemove;

		default:
			return state;
	}
};

export default gridDataReducer;