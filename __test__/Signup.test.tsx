/**
 * @jest-environment jsdom
 */

test('use jsdom in this test file', () => {
	const element = document.createElement('div');
	expect(element).not.toBeNull();
});

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Signup from '../src/client/Signup';

// can use DESCRIBE BLOCKS to nest mulitple tests that are similar
// ie: all are for a component and some functionality for it
describe('Signup component testing', () => {
	// what we are testing
	test('Signup component should have the text Email', () => {
		// 1st render the component we want to test
		render(<Signup />);
		// find an element we want to interact with
		const divElement = screen.getByRole('signup');
		// use screen to interact with it via its methods
		expect(divElement).toHaveProperty('role', 'signup');
		//Assertion that the results are as expected
	});
});
