/**
 * @jest-environment jsdom
 */

 test('use jsdom in this test file', () => {
	const element = document.createElement('div');
	expect(element).not.toBeNull();
});

import * as React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor, RenderResult } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';
import { act } from 'react-dom/test-utils';
// import renderer from 'react-test-renderer';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import App from '../src/client/App';

// const renderWithRouter = (ui: JSX.Element, { route = '/' } = {}) => {
//   window.history.pushState({}, 'Test page', route);

//   return {
//     user: userEvent.setup(),
//     ...render(ui),
//   };
// };

// describe('Unit testing App component', () => {
//   describe('React-Router route testing', () => {
//     beforeEach(async () => {
//       fetchMock.resetMocks();
//       await act(async () => {
//         fetchMock.mockResponseOnce(
//           JSON.stringify({
//             email: 'ed@gmail.com',
//             password: '12345',
//             confirmPassword: '12345',
//           });
//         );
//       });
//     });

//     it('Renders Login component when on /', () => {
//       const route = '/';
//       const { user } = renderWithRouter(<App />, { route });
//       expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
//       expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
//       expect(screen.getByLabelText(/Confirm Password/i)).toBeInTheDocument();
//     });

//     it('Renders Register component when on /signup', () => {
//       const route = '/signup';
//       const { user } = renderWithRouter(<App />, { route });
//       expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
//       expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
//       expect(screen.getByLabelText(/Confirm Password/i)).toBeInTheDocument();
//     });
//   });
// });