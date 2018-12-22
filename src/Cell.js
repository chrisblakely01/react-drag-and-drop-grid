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
 */
class Cell extends Component {
	constructor(props){
		super(props);

		const initialState = props.shift? props.shift : null;
		this.state = {shift: initialState};

		this.handleDragEnd = this.handleDragEnd.bind(this);

	}

	handleDrop (shift) {
		this.setState({shift: shift});
	}

	handleDragEnd() {
		this.setState({shift: null});
	}

	render () {
		return this.props.connectDropTarget(
			<div className={`item ${this.props.isOver ? 'highlight' : ''}`}>
				{this.state.shift ? <Shift shiftTime={this.state.shift.shiftTime} onDragEnd={this.handleDragEnd}/> : null}
			</div>
		);
	}
}

export default DropTarget(Types.ITEM, dropTarget, collect)(Cell)
