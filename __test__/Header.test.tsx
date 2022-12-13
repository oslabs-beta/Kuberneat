/**
 * @jest-environment jsdom
 */

 test('use jsdom in this test file', () => {
	const element = document.createElement('div');
	expect(element).not.toBeNull();
});

 import React from 'react';
 // import react testing methods
 import { render, screen, fireEvent } from '@testing-library/react';
 // userEvent library simulates user interactions by dispatching events that would occur in the browser
 import userEvent from '@testing-library/user-event';
 // add custom jest matchers from jest-dowm
//  import '@testing-library/jest-dom';
 // import the component to test
 import Header from '../src/client/components/Header';

 

// test('Header should load', () => {
// 	// render the component bring tested
// 	render(<Header title="test header" />);
// 	// grab the element we want to interact with
// 	// use screen and its mehods to do so
// 	const divElement = screen.getByRole('header');
// 	// assert the expected results
// 	expect(divElement).toBeInTheDocument();
// });
