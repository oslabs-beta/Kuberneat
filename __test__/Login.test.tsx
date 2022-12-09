/**
 * @jest-environment jsdom
 */

 test('use jsdom in this test file', () => {
    const element = document.createElement('div');
    expect(element).not.toBeNull();
  });

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../src/client/Login';

// can use DESCRIBE BLOCKS to nest mulitple tests that are similar 
// ie: all are for a component and some functionality for it
describe("Login component testing", () => {

    // what we are testing
test('Login component should have the text Email', 
async () => {
    // 1st render the component we want to test
    render(<Login />);
    // find an element we want to interact with
    const divElement = screen.getByRole("login");
    // use screen to interact with it via its methods
    expect(divElement).toContain("Email");
    //Assertion that the results are as expected
});

});