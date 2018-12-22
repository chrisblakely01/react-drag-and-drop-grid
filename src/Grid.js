import React, { Component } from 'react';
import './Grid.css';
import Shift from './Shift.js'
import Cell from './Cell.js';

class Grid extends Component {

	render() {
		const shift1 = { shiftTime: '9-5' };
		const shift2 = { shiftTime: '10-4' };
		const shift3 = { shiftTime: '3-6' };

		return (
			<div className="grid-container">
			    <div className="item">Employees</div>
			    <div className="item">Chris</div>
				<div className="item">Mike</div>
				<div className="item">Barry</div>
				<div className="item">Ciaran</div>

				<div className="item">Mon</div>
				<Cell shift={ shift1 }/>
				<Cell shift={ shift2 }/>
				<Cell shift={ shift3 }/>
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
