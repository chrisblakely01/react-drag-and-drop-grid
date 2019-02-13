import React, { Component } from 'react';
import './Cell.css'

// TODO REFACTOR TO HOOKS
class CostCell extends Component {
	render () {
		return(
			<div className="item">
				{this.props.amount}
			</div>
		);
	}
}

export default CostCell;
