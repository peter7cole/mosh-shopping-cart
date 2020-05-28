import React, { Component } from 'react';

export default class Counter extends Component {
	state = {
		count: 0
	};

	styles = {
		fontSize: 40,
		fontWeight: 'bold'
	};

	render() {
		return (
			<React.Fragment>
				<span style={this.styles} className="badge badge-primary m-3">
					{this.formatCount()}
				</span>
				<button className="btn btn-secondary btn-sm">Increment</button>
			</React.Fragment>
		);
	}

	formatCount() {
		const { count } = this.state;
		return count === 0 ? 'Zero' : count;
	}
}
