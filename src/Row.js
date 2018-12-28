import React, { Component } from 'react';
import { DragSource } from 'react-dnd'
import './Grid.css';
import Cell from './Cell.js';

const Types = {
	ITEM: 'row'
}
const itemSource = {
	beginDrag(props, monitor, component) {
		return {};
	},
	endDrag(props, monitor, component) {

	}

}
function collect(connect, monitor) {
	return {
		connectDragSource: connect.dragSource(),
		connectDragPreview: connect.dragPreview(),
		isDragging: monitor.isDragging(),
	}
}

class Row extends Component {
	constructor(props) {
		super(props);

		this.state = { shiftTime: this.props.shiftTime }

		this.handleDragEnd = this.handleDragEnd.bind(this);
	}

	getShiftTime() {
		return this.props.shiftTime
	}

	handleDragEnd() {
		this.props.onDragEnd();
	}

	render() {
		const shift1 = { shiftTime: '9-5' };
		const shift2 = { shiftTime: '10-4' };
		const shift3 = { shiftTime: '3-6' };

		return this.props.connectDragPreview(
			<div className="draggable-row">
				{this.props.connectDragSource(<div className="item">{this.props.name}</div>)}

				<Cell shifts={[shift1, shift2]} />
				<Cell shifts={[shift2]} />
				<Cell shifts={[shift3]} />
				<Cell />
				<Cell />
				<Cell />
				<Cell />
			</div>,
		)
	}
}

export default DragSource(Types.ITEM, itemSource, collect)(Row)
