import React from 'react';
import { render } from './node_modules/@testing-library/react';
import App from '.';

test('renders increment button', () => {
	const { getByText } = render(<App />);
	const linkElement = getByText(/Delete/i);
	expect(linkElement).toBeInTheDocument();
});
