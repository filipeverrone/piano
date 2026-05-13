import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders piano title', () => {
  render(<App />);
  expect(screen.getByText(/piano online/i)).toBeInTheDocument();
});
