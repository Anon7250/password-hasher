import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders password list', () => {
  const { getByTestId } = render(<App />);
  const list = getByTestId("password-list");
  expect(list).toBeInTheDocument();
});
