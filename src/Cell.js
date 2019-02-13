import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import Shift from './Shift'
import './Cell.css'


const Types = {
	ITEM: 'shift'
}

const dropTarget = {
	
	drop(props, monitor, component) {
		return component.handleDrop(monitor.getItem());
	},

	hover(props, monitor, component) {
	},
};


function collect(connect, monitor) {
	return {
		connectDropTarget: connect.dropTarget(),
		isOver: monitor.isOver()
	}
}

/* 
	Simiar to react connect, DnD props are passed in as part of the HOC dropTarget component.
	Props are merged together, i.e props from parent

	The cell is in charge or rendering shifts, handling the drops, and handling the removing of a shift
 */
class Cell extends Component {
	constructor(props){
		super(props);

		this.handleDragEnd = this.handleDragEnd.bind(this);

	}

	componentDidUpdate(){
		console.log('Cell UPDATING', this.props.cell);
	}

	handleDrop (shift) {
		this.props.addShiftToCell(shift, this.props.cell);
	}

	handleDragEnd () {
		this.props.removeShiftFromCell(this.props.cell);
	}

	renderShifts = (shift, index) => {
		return <Shift key={index} shiftTime={shift.shiftTime} onDragEnd={this.handleDragEnd}/> ;
	}

	render () {
		return this.props.connectDropTarget(
			<div className={`item ${this.props.isOver ? 'highlight' : ''}`}>
				{this.props.shifts.length > 0 ?  (this.props.shifts.map((shift, index) => this.renderShifts(shift, index))) : null }
			</div>
		);
	}
}

export default DropTarget(Types.ITEM, dropTarget, collect)(Cell)
