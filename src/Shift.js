import React, { Component } from 'react';
import { DragSource } from 'react-dnd'
import './Shift.css';

const Types = {
	ITEM: 'shift'
}
const itemSource = {
	beginDrag(props) {
		console.log('BEGIN DRAG');
		return {};
	},
	endDrag(props) {
		console.log('END DRAG');
		return {};
	}
}
function collect(connect, monitor) {
	return {
		connectDragSource: connect.dragSource(),
		isDragging: monitor.isDragging()
	}
}

function Shift({ connectDragSource, isDragging }) {
	return connectDragSource(
		<div className="shift">9-5</div>
	);
  }

export default DragSource(Types.ITEM, itemSource, collect)(Shift)