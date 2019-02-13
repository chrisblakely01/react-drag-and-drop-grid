import React, { Component } from 'react';
import './Cell.css'

// TODO REFACTOR TO HOOKS
class EmployeeCell extends Component {
	render () {
		return(
			<div className="item">
				{this.props.name}
			</div>
		);
	}
}

export default EmployeeCell;
