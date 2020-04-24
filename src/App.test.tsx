import { render } from '@testing-library/react';
import React from 'react';

import App from './App';

test('renders login page when app first loads', () => {
  const { getByText } = render(<App />);
  const loginBtn = getByText(/Login/i);
  expect(loginBtn).toBeInTheDocument();
});
