import React from 'react';
import { render, screen } from '@testing-library/react';
import {SrOnly} from './SrOnly';

describe('SrOnly', () => {
  test('renders sr only', () => {
    render(<SrOnly data-testid={'sr-only'} />);
    const element = screen.getByTestId('sr-only');
    expect(element).toBeInTheDocument();
  });

  test('renders sr only with styles', () => {
    render(<SrOnly data-testid={'sr-only'} />);
    const imgElement = screen.getByTestId('sr-only');
    expect(imgElement).toHaveStyle('display: none');
  });
});
