import React, { Component } from 'react';

export default class Counter extends Component {
	state = {
		count: 0
	};

	render() {
		return (
			<React.Fragment>
				<span className={this.getBadgeClasses()}>{this.formatCount()}</span>
				<button
					onClick={this.handleIncrement}
					className="btn btn-secondary btn-sm"
				>
					Increment
				</button>
			</React.Fragment>
		);
	}

	handleIncrement = () => {
		this.setState({ count: this.state.count + 1 });
	};

	getBadgeClasses() {
		let classes = 'badge m-2 badge-';
		return (classes += this.state.count === 0 ? 'warning' : 'primary');
	}

	formatCount() {
		const { count } = this.state;
		return count === 0 ? 'Zero' : count;
	}
}
