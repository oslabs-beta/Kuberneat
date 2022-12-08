import { render, screen, fireEvent } from '@testing-library/react';
import Faq from '../components/Faq';

// can use DESCRIBE BLOCKS to nest mulitple tests that are similar 
// ie: all are for a component and some functionality for it
describe("Faq component testing", () => {

    // what we are testing
it('Faq component should have an input field with a test id of search-field', 
async () => {
    // 1st render the component we want to test
    render(<Faq />);
    // find an element we want to interact with
    const textFieldElement = screen.getByTestId("search-field");
    // use screen to interact with it via its methods
    expect(textFieldElement).toBeInTheDocument();
    //Assertion that the results are as expected
});

});