import { render, screen, fireEvent } from '@testing-library/react';
import Calendar from '../calendar/index';
import { BrowserRouter } from 'react-router-dom';

/* 
first integration test: which involves the testing the interaction of 2 diff components
*/


const MockCalendar = () => {

    return (
// doesn't pass in any props
    <BrowserRouter>
        <Calendar /> 
    </BrowserRouter>
    )
}

describe("Calendar component", () => {

    // it('should render Calendar', async () => {
    //     render(<MockCalendar />);
    // });

    it('should check if text entered appears in initialEvents', async () => {
        render(<MockCalendar />);
        const inputElement = screen.getByPlaceholderText(/Add a new event here.../i)
        const buttonElement = screen.getByRole('button', { name: /Submit/i });
        fireEvent.change(inputElement, { target: { value: "New Event" }});
        fireEvent.click(buttonElement)
        const divElement = screen.getByText(/New Event/i);
        expect(divElement).toBeInTheDocument()
    });
});