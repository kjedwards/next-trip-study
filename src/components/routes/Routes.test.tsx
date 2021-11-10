import React from 'react';
import { render, screen } from '@testing-library/react';
import Routes from './Routes';

describe('Routes', () => {
  test('renders routes', () => {
    render(<Routes value={{value: '', label: ''}} updateFunc={jest.fn()} routes={[]}/>) ;
    const element = screen.getByTestId('routes-dropdown');
    expect(element).toBeInTheDocument();
  });
});
