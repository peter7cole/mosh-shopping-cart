import React, { Component } from 'react';

export default class Counter extends Component {
	state = {
		value: this.props.value
	};

	handleIncrement = () => {
		this.setState({ value: this.state.value + 1 });
	};

	render() {
		return (
			<div>
				<span style={{ fontSize: 16 }} className={this.getBadgeClasses()}>
					{this.formatCount()}
				</span>
				<button
					onClick={() => this.handleIncrement()}
					className="btn btn-secondary btn-sm"
				>
					Increment
				</button>
				<button className="btn btn-danger btn-sm m-2">Delete</button>
			</div>
		);
	}

	getBadgeClasses() {
		let classes = 'badge m-2 badge-';
		return (classes += this.state.value === 0 ? 'warning' : 'primary');
	}

	formatCount() {
		const { value } = this.state;
		return value === 0 ? 'Zero' : value;
	}
}
