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


// test('Faq should load', () => {
// 	// render the component bring tested
// 	render(<Faq />);
// 	// grab the element we want to interact with
// 	// use screen and its mehods to do so
// 	const divElement = screen.getByRole('faq');
// 	// assert the expected results
// 	expect(divElement).toBeInTheDocument();
// });