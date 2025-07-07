module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'jsx'],
  testPathIgnorePatterns: ['/node_modules/'],
};

import React from 'react';
import { render, screen } from '@testing-library/react';
import JumbotronComponent from './JumbotronComponent';

test('renders JumbotronComponent', () => {
  render(<JumbotronComponent />);
  const linkElement = screen.getByText(/your jumbotron text/i);
  expect(linkElement).toBeInTheDocument();
});