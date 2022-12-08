import { render, screen, fireEvent } from '@testing-library/react';
import Sidebar from '../Sidebar';

// can use DESCRIBE BLOCKS to nest mulitple tests that are similar 
// ie: all are for a component and some functionality for it
describe("Sidebar component testing", () => {

        // what we are testing
    it('Sidebar component should have an input field with a test id of search-field', 
    async () => {
        // 1st render the component we want to test
        render(<Sidebar />);
        // find an element we want to interact with
        const textFieldElement = screen.getByTestId("search-field");
        // use screen to interact with it via its methods
        expect(textFieldElement).toBeInTheDocument();
        //Assertion that the results are as expected
    });

    it('Sidebar component should have an input field with placeholder text of Search', 
    async () => {

        render(<Sidebar />);

        const textFieldElement = screen.getByPlaceholderText(/Search/i);

        expect(textFieldElement).toBeInTheDocument();
    });

    it('should be able to type into the search input field with a test id of search-field', 
    async () => {

        render(<Sidebar />);

        const inputElement = screen.getByTestId("search-field");
        fireEvent.change(inputElement, { target: { value: "k8"} })
        // allows testing around events
        expect(inputElement.value).toBe("k8");
    });

  });