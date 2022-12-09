/**
 * @jest-environment jsdom
 */

 test('use jsdom in this test file', () => {
    const element = document.createElement('div');
    expect(element).not.toBeNull();
  });

  
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Faq from '../components/Faq';
import Header from '../components/Header';

// can use DESCRIBE BLOCKS to nest mulitple tests that are similar 
// ie: all are for a component and some functionality for it
describe("Faq component testing", () => {

    // what we are testing
test('Faq component should render a header title', 
async () => {
    // 1st render the component we want to test
    render(<Header title="FAQ" subtitle="Frequently Asked Questions Page"/>);
    // find an element we want to interact with
    const divElement = screen.getByRole("header");
    // use screen to interact with it via its methods
    expect(divElement).toContain("FAQ");
    //Assertion that the results are as expected
});

});