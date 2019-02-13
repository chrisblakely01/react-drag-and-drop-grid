import React, { Component } from 'react';
import './Grid.css';
import Cell from './Cell';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addShiftToCell, removeShiftFromCell } from './actions/gridDataActions';

class Grid extends Component {
	componentDidUpdate() {
	}

	render() {
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

				{this.props.gridData.map((cell, cellIndex) => {
					return <Cell shifts={cell} cell={cellIndex} addShiftToCell={this.props.actions.addShiftToCell} removeShiftFromCell={this.props.actions.removeShiftFromCell}/>

				})}
			</div>
		);
	}
}

const mapStateToProps = (state, props) => ({
	gridData: state.gridData
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators({
		addShiftToCell,
		removeShiftFromCell,
	}, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Grid);

