import React, { Component } from 'react';
import './App.scss';
import CounterList from '../CounterList';

export default class App extends Component {
	render() {
		return (
			<div>
				<CounterList />
			</div>
		);
	}
}
