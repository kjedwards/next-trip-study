import React from 'react';
import { render, screen } from '@testing-library/react';
import Stops from './Stops';

describe('Stops', () => {
  test('renders stops', () => {
    render(<Stops value={{value: '', label: ''}} updateFunc={jest.fn()}  stops={[]}/>) ;
    const element = screen.getByTestId('stop-dropdown');
    expect(element).toBeInTheDocument();
  });
});
