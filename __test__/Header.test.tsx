/**
 * @jest-environment jsdom
 */

test('use jsdom in this test file', () => {
	const element = document.createElement('div');
	expect(element).not.toBeNull();
});

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../src/client/components/Header';

// can use DESCRIBE BLOCKS to nest mulitple tests that are similar
// ie: all are for a component and some functionality for it
describe('Header component testing', () => {
	// what we are testing
	test('Header component should have a title', () => {
		// 1st render the component we want to test
		render(<Header title='I am the Header' />);
		// find an element we want to interact with
		const divElement = screen.getByRole('header');
		// use screen to interact with it via its methods
		expect(divElement).toHaveProperty('title', 'I am the Header');
		//Assertion that the results are as expected
	});
});
