/**
 * @jest-environment jsdom
 */

 test('use jsdom in this test file', () => {
	const element = document.createElement('div');
	expect(element).not.toBeNull();
});

 import React from 'react';
 // import react testing methods
 import { render, screen } from '@testing-library/react';
 // userEvent library simulates user interactions by dispatching events that would occur in the browser
 import userEvent from '@testing-library/user-event';
 // add custom jest matchers from jest-dowm
//  import '@testing-library/jest-dom';
 // import the component to test
 import Header from '../src/client/components/Header';

// describe('Header component testing', () => {
// 	test('Header should have title test header', async () => {
// 		// render the component bring tested
// 		render(<Header title='test header' subtitle='test subtitle' path='/' />);
// 		// grab the element we want to interact with
// 		// use screen and its mehods to do so
// 		const headingElement = screen.getByRole('header');
// 		// assert the expected results
// 		expect(headingElement).toHaveTextContent('test header');
// 	});
	
// 	test('Header should have an attribute called title', async () => {
// 		// render the component bring tested
// 		render(<Header title='test header' subtitle='test subtitle' path='/' />);
// 		// grab the element we want to interact with
// 		// use screen and its mehods to do so
// 		const headingElement = screen.getByRole('header');
// 		// assert the expected results
// 		expect(headingElement).toHaveAttribute('title');
// 	});
	
// 	test('Header should have an attribute called subtitle', async () => {
// 		// render the component bring tested
// 		render(<Header title='test header' subtitle='test subtitle' path='/' />);
// 		// grab the element we want to interact with
// 		// use screen and its mehods to do so
// 		const headingElement = screen.getByRole('header');
// 		// assert the expected results
// 		expect(headingElement).toHaveAttribute('subtitle');
// 	});
	
// 	test('Header should have an attribute called path', async () => {
// 		// render the component bring tested
// 		render(<Header title='test header' subtitle='test subtitle' path='/' />);
// 		// grab the element we want to interact with
// 		// use screen and its mehods to do so
// 		const headingElement = screen.getByRole('header');
// 		// assert the expected results
// 		expect(headingElement).toHaveAttribute('path');
// 	});
// });

