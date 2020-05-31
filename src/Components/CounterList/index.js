import React, { Component } from 'react';
import Counter from '../Counter';

export default class counterList extends Component {
	state = {
		counters: [
			{ id: 1, value: 0 },
			{ id: 2, value: 0 },
			{ id: 3, value: 0 },
			{ id: 4, value: 0 }
		]
	};

	handleIncrement = selectedCounter => {
		const newCounters = [...this.state.counters];
		const index = newCounters.indexOf(selectedCounter);
		newCounters[index] = { ...selectedCounter };
		newCounters[index].value++;
		this.setState({ counters: newCounters });
	};

	handleDelete = counterId => {
		const counters = this.state.counters.filter(
			counter => counter.id !== counterId
		);
		this.setState({ counters });
	};

	handleReset = () => {
		const counters = this.state.counters.map(c => {
			c.value = 0;
			return c;
		});
		this.setState({ counters });
	};

	render() {
		return (
			<div>
				<button
					onClick={this.handleReset}
					className="btn btn-primary btn-sm m-2"
				>
					Reset
				</button>
				{this.state.counters.map(counter => (
					<Counter
						key={counter.id}
						onDelete={this.handleDelete}
						onIncrement={this.handleIncrement}
						counter={counter}
					/>
				))}
			</div>
		);
	}
}
