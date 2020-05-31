import React from 'react';

// Stateless Functional Component

const NavBar = ({ totalCounters }) => {
	console.log('Navbar - Rendered');
	return (
		<div>
			<nav className="navbar navbar-light bg-light">
				<a className="navbar-brand" href="/">
					Cart{' '}
					<span className="badge badge-pill badge-secondary">
						{totalCounters}
					</span>
				</a>
			</nav>
		</div>
	);
};

export default NavBar;
