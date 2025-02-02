
/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Header from '../src/client/components/Header';
import { Context } from '../src/client/Context';
import { BrowserRouter } from 'react-router-dom';

const MockContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
	<BrowserRouter>
	  <Context.Provider value={{ darkModeOn: false, setUser: jest.fn(), user: null }}>
		{children}
	  </Context.Provider>
	</BrowserRouter>
  );

describe('Header component testing', () => {
  test('Header should have title test header', async () => {
    render(
      <MockContextProvider>
        <Header title='test header' subtitle='test subtitle' path='/' />
      </MockContextProvider>
    );
    const titleElement = screen.getByText('test header');
    expect(titleElement).toBeInTheDocument();
  });
  
  test('Header should have subtitle test subtitle', async () => {
    render(
      <MockContextProvider>
        <Header title='test header' subtitle='test subtitle' path='/' />
      </MockContextProvider>
    );
    const subtitleElement = screen.getByText('test subtitle');
    expect(subtitleElement).toBeInTheDocument();
  });
  
  test('Header should render without crashing', async () => {
    render(
      <MockContextProvider>
        <Header title='test header' subtitle='test subtitle' path='/' />
      </MockContextProvider>
    );
    const headerElement = screen.getByTestId('header');
    expect(headerElement).toBeInTheDocument();
  });

  // You can add more specific tests here if needed
});