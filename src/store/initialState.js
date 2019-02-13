const getInitialState = () => {
	const shift1 = { shiftTime: '9-5' };
	const shift2 = { shiftTime: '10-4' };
	const shift3 = { shiftTime: '3-6' };

	// this array represents the grid. The array is mapped and CSSGrid handles the "rows" for us
	// each array index will have an array of "cell items"
	return {
		gridData: [
			[shift2], [], [shift1], [], [], [shift3, shift1], [],
			[], [], [shift1], [], [shift2], [], [], 
			[], [], [shift1], [], [shift2], [], [], 
			[], [], [shift1], [], [shift2], [], [], 
			[], [], [shift1], [], [shift2], [], [], 
			[], [], [shift1], [], [shift2], [], [], 
			[], [], [shift1], [], [shift2], [], [], 
			[], [], [shift1], [], [shift2], [], [], 
			[], [], [shift1], [], [shift2], [], [], 
			[], [], [shift1], [], [shift2], [], [], 
			[], [], [shift1], [], [shift2], [], [], 
			[], [], [shift1], [], [shift2], [], [], 
			[], [], [shift1], [], [shift2], [], [], 
			[], [], [shift1], [], [shift2], [], [], 
			[], [], [shift1], [], [shift2], [], [], 
			[], [], [shift1], [], [shift2], [], [], 
			[], [], [shift1], [], [shift2], [], [], 
			[], [], [shift1], [], [shift2], [], [], 
			[], [], [shift1], [], [shift2], [], [], 
			[], [], [shift1], [], [shift2], [], [], 
			[], [], [shift1], [], [shift2], [], [], 
			[], [], [shift1], [], [shift2], [], [], 
			[], [], [shift1], [], [shift2], [], [], 
			[], [], [shift1], [], [shift2], [], [], 
			[], [], [shift1], [], [shift2], [], [], 
			[], [], [shift1], [], [shift2], [], [], 
			[], [], [shift1], [], [shift2], [], [], 
			[], [], [shift1], [], [shift2], [], [], 
			[], [], [shift1], [], [shift2], [], [], 
			[], [], [shift1], [], [shift2], [], [], 
			[], [], [shift1], [], [shift2], [], [], 
			[], [], [shift1], [], [shift2], [], [], 
			[], [], [shift1], [], [shift2], [], [], 
			[], [], [shift1], [], [shift2], [], [], 
			[], [], [shift1], [], [shift2], [], [], 
			[], [], [shift1], [], [shift2], [], [], 
			[], [], [shift1], [], [shift2], [], [], 
			[], [], [shift1], [], [shift2], [], [], 
			[], [], [shift1], [], [shift2], [], [], 
			[], [], [shift1], [], [shift2], [], [], 
			[], [], [shift1], [], [shift2], [], [], 
			[], [], [shift1], [], [shift2], [], [], 
			[], [], [shift1], [], [shift2], [], [], 
			[], [], [shift1], [], [shift2], [], [], 
			[], [], [shift1], [], [shift2], [], [], 
			[], [], [shift1], [], [shift2], [], [], 
			[], [], [shift1], [], [shift2], [], [], 
			[], [], [shift1], [], [shift2], [], [], 
			[], [], [shift1], [], [shift2], [], [], 
			[], [], [shift1], [], [], [], [shift2]],
	}

};

export default getInitialState;