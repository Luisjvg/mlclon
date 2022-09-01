import { render, screen } from '@testing-library/react';
import App from './App';
import * as React from "react";
// import "jest-dom/extend-expect";
import "jest-styled-components";

test('renders learn react link', () => {
  render(<App />);
  expect(<App />).toMatchSnapshot
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
