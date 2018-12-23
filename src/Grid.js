import React, { Component } from 'react';
import './Grid.css';
import DraggableRow from './RowContainer';

class Grid extends Component {

	render() {
		return (
			<div className="grid-container">
			    <div className="item">Employees</div>
			    <div className="item">Mon</div>
				<div className="item">Tues</div>
				<div className="item">Weds</div>
				<div className="item">Thurs</div>
				<div className="item">Fri</div>
				<div className="item">Sat</div>
				<div className="item">Sun</div>

				<DraggableRow name="Chris"/>
				<DraggableRow name="David"/>
				<DraggableRow name="Jake"/>
				<DraggableRow name="Roy"/>
				<DraggableRow name="Dillon"/>
			</div>
		);
	}
}

export default Grid;
