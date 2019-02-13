import React, { Component } from 'react';
import { DragSource } from 'react-dnd'
import './Shift.css';

const Types = {
	ITEM: 'shift'
}
const itemSource = {
	beginDrag(props, monitor, component) {
		const shiftTime = component.getShiftTime() 

		return { shiftTime: shiftTime};
	}, 
	endDrag(props, monitor, component) {

		component.handleDragEnd();
	}

}
function collect(connect, monitor) {
	return {
		connectDragSource: connect.dragSource(),
		isDragging: monitor.isDragging(),
	}
}

class Shift extends Component {
	constructor(props){
		super(props);

		this.state = {shiftTime: this.props.shiftTime}

		this.handleDragEnd = this.handleDragEnd.bind(this);
	}

	getShiftTime() {
		return this.props.shiftTime
	}

	handleDragEnd() {
		this.props.onDragEnd(this.state, this.props.cell);
	}


	render() {
		return this.props.connectDragSource(
			<div className="shift">{this.state.shiftTime}</div>
		);
	}
}

export default DragSource(Types.ITEM, itemSource, collect)(Shift)