import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import Row from './Row'
import './RowContainer.css'


const Types = {
	ITEM: 'row'
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

class RowContainer extends Component {
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
		console.log(this.props.isOver)
		return this.props.connectDropTarget(
			<div class={`row-container ${this.props.isOver ? 'highlight' : ''}`}>
				<Row name={this.props.name}/>
			</div>
		);
	}
}

export default DropTarget(Types.ITEM, dropTarget, collect)(RowContainer)
