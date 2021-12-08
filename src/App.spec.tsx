import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('APP Component', () => {
	it('should render without errors', () => {
		const div = document.createElement('div');
		ReactDOM.render(<App />, div);
	});
});
