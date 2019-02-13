import React, { Component, Fragment } from 'react';
import Grid from './Grid.js';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContextProvider } from 'react-dnd';

class App extends Component {

	render() {
		const shift1 = { shiftTime: '9-5' };
		const shift2 = { shiftTime: '10-4' };
		const shift3 = { shiftTime: '3-6' };

		const gridData = [
			[[shift2], [], [shift1], [], [], [], []],
			[[], [], [shift1], [], [shift2], [], []],
			[[], [], [shift1], [], [], [], [shift2]],
		];

		return (
			<DragDropContextProvider backend={HTML5Backend}>
				<Fragment>
					<Grid gridRows={gridData} />
				</Fragment>
			</DragDropContextProvider>

		);
	}
}

export default App;
