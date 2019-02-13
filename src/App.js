import React, { Component, Fragment } from 'react';
import Grid from './Grid.js';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContextProvider } from 'react-dnd';

class App extends Component {

	render() {
		return (
			<DragDropContextProvider backend={HTML5Backend}>
				<Fragment>
					<Grid />
				</Fragment>
			</DragDropContextProvider>

		);
	}
}

export default App;
