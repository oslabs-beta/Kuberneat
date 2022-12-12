/**
 * @jest-environment jsdom
 */

test('use jsdom in this test file', () => {
	const element = document.createElement('div');
	expect(element).not.toBeNull();
});

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Faq from '../src/client/components/Faq';

// can use DESCRIBE BLOCKS to nest mulitple tests that are similar
// ie: all are for a component and some functionality for it
describe('Faq component testing', () => {
	// what we are testing
	test('Faq component should render a header title', () => {
		// 1st render the component we want to test
		render(<Faq />);
		// find an element we want to interact with
		const divElement = screen.getByRole('faq');
		// use screen to interact with it via its methods
		expect(divElement).toHaveProperty('role', 'faq');
		//Assertion that the results are as expected
	});
});
