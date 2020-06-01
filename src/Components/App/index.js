import React, { Component } from 'react';
import './App.scss';
import NavBar from '../NavBar';
import CounterList from '../CounterList';

export default class App extends Component {
	state = {
		counters: [
			{ id: 1, name: 'Fire', value: 0 },
			{ id: 2, name: 'Water', value: 0 },
			{ id: 3, name: 'Air', value: 0 },
			{ id: 4, name: 'Earth', value: 0 }
		]
	};

	// constructor(props) {
	// 	super(props);
	// 	console.log('App - Constructor');
	// }

	componentDidMount() {
		// console.log('App - Mounted');
	}

	handleReset = () => {
		const counters = this.state.counters.map(c => {
			c.value = 0;
			return c;
		});
		this.setState({ counters });
	};

	handleQuantityChange = (selectedCounter, direction) => {
		const newCounters = [...this.state.counters];
		const index = newCounters.indexOf(selectedCounter);
		newCounters[index] = { ...selectedCounter };
		newCounters[index].value += direction;
		this.setState({ counters: newCounters });
	};

	handleDelete = counterId => {
		const counters = this.state.counters.filter(
			counter => counter.id !== counterId
		);
		this.setState({ counters });
	};

	render() {
		// console.log('App - Rendered');
		return (
			<React.Fragment>
				<NavBar
					totalCounters={
						this.state.counters.filter(counter => counter.value > 0).length
					}
				/>
				<main className="container">
					<CounterList
						counters={this.state.counters}
						onReset={this.handleReset}
						onQuantityChange={this.handleQuantityChange}
						onDelete={this.handleDelete}
					/>
				</main>
			</React.Fragment>
		);
	}
}
