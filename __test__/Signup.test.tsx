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
 import Signup from '../src/client/Signup';


test('change values via the fireEvent.change method', () => {
	const handleChange = jest.fn()
	const {container} = render(<input type="text" onChange={handleChange} />)
	const input = container.firstChild
	fireEvent.change(input, {target: {value: 'a'}})
	expect(handleChange).toHaveBeenCalledTimes(1)
  });

// describe('Signup component testing', () => {
// 	it('Should render input element', async () => {
//         render(<Signup />);
//         const inputElement = screen.getByPlaceholderText(/enter your email/i);
//         expect(inputElement).toBeInTheDocument;
// 	});
// 	it('Should be able to enter text in input element', async () => {
//         render(<Signup />);
//         const inputElement = screen.getByPlaceholderText(/enter your email/i);
//         fireEvent.change(inputElement, { target: { value: 'ed@gmail.com' }});
//         expect(inputElement).toHaveTextContent('ed@gmail.com');
// 	});
//     it('Should have an empty input field when login button clicked', async () => {
//         render(<Signup />);
//         const inputElement = screen.getByPlaceholderText(/enter your email/i);
//         const buttonElement = screen.getByRole('signup-button');
//         fireEvent.change(inputElement, { target: { value: 'ed@gmail.com' }});
//         fireEvent.click(buttonElement);
//         expect(inputElement).toHaveTextContent('');
// 	});
//     test('Signup component should load', () => {
// 		// render the component bring tested
// 		render(<Signup />);
// 		// grab the element we want to interact with
// 		// use screen and its mehods to do so
// 		const divElement = screen.getByRole('signup');
// 		// assert the expected results
// 		expect(divElement).toBeInTheDocument();
// 	});
//  });
