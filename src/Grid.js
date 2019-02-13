import React, { Component } from 'react';
import './Grid.css';
import Cell from './Cell';
import EmployeeCell from './EmployeeCell';
import CostCell from './CostCell';

class Grid extends Component {

	render() {
		const shift1 = { shiftTime: '9-5' };
		const shift2 = { shiftTime: '10-4' };
		const shift3 = { shiftTime: '3-6' };

		return (
			<div className="grid-container">
				{/* <div className="item">Employees</div> */}
				<div className="item">Mon</div>
				<div className="item">Tues</div>
				<div className="item">Weds</div>
				<div className="item">Thurs</div>
				<div className="item">Fri</div>
				<div className="item">Sat</div>
				<div className="item">Sun</div>
				{/* <div className="item">Totals</div> */}
				{/* 
				<EmployeeCell name="Tom" />
				<Cell shifts={[shift1, shift2]} />
				<Cell shifts={[shift2]} />
				<Cell shifts={[shift3]} />
				<Cell />
				<Cell />
				<Cell />
				<Cell />
				<CostCell amount="£20" />

				<EmployeeCell name="Tom" />
				<Cell shifts={[shift1, shift2]} />
				<Cell shifts={[shift2]} />
				<Cell shifts={[shift3]} />
				<Cell />
				<Cell />
				<Cell />
				<Cell />
				<CostCell amount="£20" />

				<EmployeeCell name="Tom" />
				<Cell shifts={[shift1, shift2]} />
				<Cell shifts={[shift2]} />
				<Cell shifts={[shift3]} />
				<Cell />
				<Cell />
				<Cell />
				<Cell />
				<CostCell amount="£20" /> */}

				{this.props.gridRows.map((row, rowIndex) => {
					console.log("ROW NUMBER", rowIndex);
					return row.map((cell, cellIndex) => {
						console.log("CELL NUMBER", cellIndex);
						console.log(cell)
						return <Cell shifts={cell}/>
					})
				})}
{/* 
				<div className="item">Total Cost</div>
				<div className="item">£20</div>
				<div className="item">£20</div>
				<div className="item">£20</div>
				<div className="item">£20</div>
				<div className="item">£20</div>
				<div className="item">£20</div>
				<div className="item">£20</div>
				<div className="item">£2000</div> */}

			</div>
		);
	}
}

export default Grid;
