import React, { Component } from 'react';
import './Grid.css';
import RowContainer from './RowContainer';

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

				<RowContainer name="Chris"/>
				<RowContainer name="David"/>
				<RowContainer name="Jake"/>
				<RowContainer name="Roy"/>
				<RowContainer name="Dillon"/>
				
			</div>
		);
	}
}

export default Grid;
