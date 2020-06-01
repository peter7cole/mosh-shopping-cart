import React, { Component } from 'react';
import Counter from '../Counter';

export default class counterList extends Component {
	render() {
		// console.log('Counters - Rendered');
		const { onReset, counters, onDelete, onQuantityChange } = this.props;
		return (
			<div>
				<button onClick={onReset} className="btn btn-primary btn-sm m-2">
					Reset
				</button>
				{counters.map(counter => (
					<Counter
						key={counter.id}
						onDelete={onDelete}
						onQuantityChange={onQuantityChange}
						counter={counter}
					/>
				))}
			</div>
		);
	}
}
