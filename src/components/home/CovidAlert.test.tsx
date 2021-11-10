import React from 'react';
import { render, screen } from '@testing-library/react';
import {CovidAlert} from './CovidAlert';

describe('CovidAlert', () => {
  test('renders covid alert', () => {
    render(<CovidAlert />);
    const element = screen.getByText('We are Socially Distancing');
    expect(element).toBeInTheDocument();
  });
});
