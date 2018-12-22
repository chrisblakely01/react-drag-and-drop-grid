import React from 'react';
import { DropTarget } from 'react-dnd';
import './Cell.css'


const Types = {
	ITEM: 'shift'
}

const dropTarget = {
	drop(props, monitor) {
		console.log('DROP PROPS', props);
		console.log('DROP MONITOR', monitor);
	}
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
function Cell(props) {
	return props.connectDropTarget(
		<div className={`item ${props.isOver ? 'highlight': ''}`}>
		{props.shift}
		</div>
	);
}

export default DropTarget(Types.ITEM, dropTarget, collect)(Cell)
