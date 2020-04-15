import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Card from './Components/Card';
import NavBar from './Components/NavBar';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, waitFor, screen } from '@testing-library/react'


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders NavBar.js without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NavBar />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Current App Header is Displaying', () => {
  const { getByText } = render(<App />);
  const headerText = getByText(/look at them champs!/i);
  expect(headerText).toBeVisible();
});
