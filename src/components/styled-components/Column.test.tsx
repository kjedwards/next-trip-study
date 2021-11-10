import React from 'react';
import { render, screen } from '@testing-library/react';
import {Column} from './Column';

describe('Column', () => {
  test('renders Column', () => {
    render(<Column data-testid={'col'} />);
    const element = screen.getByTestId('col');
    expect(element).toBeInTheDocument();
  });

  test('renders Column with default styles', () => {
    render(<Column data-testid={'col'} />);
    const element = screen.getByTestId('col');
    expect(element).toHaveStyle('display: flex');
    expect(element).toHaveStyle('flex-direction: column');
    expect(element).toHaveStyle('min-width: auto');
    expect(element).toHaveStyle('max-width: auto');
  });

  test('renders Column with min-width specified', () => {
    render(<Column data-testid={'col'} minWidth={'100px'} />);
    const element = screen.getByTestId('col');
    expect(element).toHaveStyle('min-width: 100px');
    expect(element).toHaveStyle('max-width: auto');
  });

  test('renders Column with max-width specified', () => {
    render(<Column data-testid={'col'} maxWidth={'100px'} />);
    const element = screen.getByTestId('col');
    expect(element).toHaveStyle('min-width: auto');
    expect(element).toHaveStyle('max-width: 100px');
  });
});
