import React from 'react';
import { render, screen } from '@testing-library/react';
import Directions from './Directions';

describe('Directions', () => {
  test('renders directions', () => {
    render(<Directions value={{value: '', label: ''}} updateFunc={jest.fn()} directions={[]}/>) ;
    const element = screen.getByTestId('directions-dropdown');
    expect(element).toBeInTheDocument();
  });
});
