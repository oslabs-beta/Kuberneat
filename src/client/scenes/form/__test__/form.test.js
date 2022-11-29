import { render, screen, fireEvent } from '@testing-library/react';
import Form from '../form/index';

describe("Form component testing", () => {

    it('Form component should have an input field with a test id of firstname-field', 
    async () => {

        render(<Form />);

        const textFieldElement = screen.getByTestId("firstname-field");

        expect(textFieldElement).toBeInTheDocument();
    });

    it('should be able to type into the firstname input field with a test id of firstname-field', 
    async () => {

        render(<Form />);

        const inputElement = screen.getByTestId("firstname-field");
        fireEvent.change(inputElement, { target: { value: "Eddie"} })

        expect(inputElement.value).toBe("Eddie");
    });

  });