import React, { Component } from 'react';

export default class Counter extends Component {
	// componentDidUpdate(prevProps, prevState) {
	// 	console.log('---- prevProps', prevProps);
	// 	console.log('---- prevState', prevState);
	// 	if (prevProps.counter.value !== this.props.counter.value) {
	// 		// Ajax call and get new data from the server
	// 	}
	// }

	// componentWillUnmount() {
	// 	console.log('Counter - Unmount');
	// 	// Place to cleanup timers, listeners etc to prevent memory leaks
	// }

	render() {
		// console.log('Counter - Rendered');
		const { counter, onQuantityChange, onDelete } = this.props;
		return (
			<div>
				<h4>{counter.name}</h4>
				<span style={{ fontSize: 16 }} className={this.getBadgeClasses()}>
					{this.formatCount()}
				</span>
				<button
					onClick={() => {
						if (counter.value > 0) return onQuantityChange(counter, -1);
					}}
					className="btn btn-secondary btn-sm m-2"
				>
					Decrement
				</button>
				<button
					onClick={() => onQuantityChange(counter, 1)}
					className="btn btn-secondary btn-sm m-2"
				>
					Increment
				</button>
				<button
					onClick={() => onDelete(counter.id)}
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
