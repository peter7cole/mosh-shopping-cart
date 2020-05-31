import React, { Component } from 'react';
import './App.scss';
import NavBar from '../NavBar';
import CounterList from '../CounterList';

export default class App extends Component {
	render() {
		return (
			<React.Fragment>
				<NavBar />
				<main className="container">
					<CounterList />
				</main>
			</React.Fragment>
		);
	}
}
