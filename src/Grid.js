import React, { Component } from 'react';
import './Grid.css';
import Shift from './Shift.js'
import Cell from './Cell.js';

class Grid extends Component {
	render() {
		return (
			<div className="grid-container">
			    <div className="item">Employees</div>
			    <div className="item">Chris</div>
				<div className="item">Mike</div>
				<div className="item">Barry</div>
				<div className="item">Ciaran</div>

				<div className="item">Mon</div>
				<div className="item">
					<Shift/>
				</div>
				<Cell shift="9-5"/>
				<Cell />
				<Cell />

				<div className="item">Tues</div>
				<Cell />
				<Cell />
				<Cell />
				<Cell />

				<div className="item">Weds</div>
				<Cell />
				<Cell />
				<Cell />
				<Cell />

				<div className="item">Thurs</div>
				<Cell />
				<Cell />
				<Cell />
				<Cell />

				<div className="item">Friday</div>
				<Cell />
				<Cell />
				<Cell />
				<Cell />

				<div className="item">Saturday</div>
				<Cell />
				<Cell />
				<Cell />
				<Cell />
				
				<div className="item">Sunday</div>
				<Cell />
				<Cell />
				<Cell />
				<Cell />

			</div>
		);
	}
}

export default Grid;
