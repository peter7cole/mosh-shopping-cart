import React, { Component } from 'react';

export default class Counter extends Component {
	// state = {
	// 	value: this.props.counter.value
	// };

	// handleIncrement = () => {
	// 	this.setState({ value: this.state.value + 1 });
	// };

	render() {
		console.log('Counter - Rendered');
		return (
			<div>
				<span style={{ fontSize: 16 }} className={this.getBadgeClasses()}>
					{this.formatCount()}
				</span>
				<button
					onClick={() => this.props.onIncrement(this.props.counter)}
					className="btn btn-secondary btn-sm"
				>
					Increment
				</button>
				<button
					onClick={() => this.props.onDelete(this.props.counter.id)}
					className="btn btn-danger btn-sm m-2"
				>
					Delete
				</button>
			</div>
		);
	}

	getBadgeClasses() {
		let classes = 'badge m-2 badge-';
		return (classes += this.props.counter.value === 0 ? 'warning' : 'primary');
	}

	formatCount() {
		const { value } = this.props.counter;
		return value === 0 ? 'Zero' : value;
	}
}
