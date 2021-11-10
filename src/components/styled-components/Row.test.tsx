import React from 'react';
import { render, screen } from '@testing-library/react';
import {Row} from './Row';

describe('Row', () => {
  test('renders Row', () => {
    render(<Row data-testid={'row'} />);
    const element = screen.getByTestId('row');
    expect(element).toBeInTheDocument();
  });

  test('renders Row with default styles', () => {
    render(<Row data-testid={'row'} />);
    const element = screen.getByTestId('row');
    expect(element).toHaveStyle('display: flex');
    expect(element).toHaveStyle('flex-wrap: auto');
  });

  test('renders Row with min-width specified', () => {
    render(<Row data-testid={'row'} wrap={'wrap'} />);
    const element = screen.getByTestId('row');
    expect(element).toHaveStyle('flex-wrap: wrap');
  });
});
