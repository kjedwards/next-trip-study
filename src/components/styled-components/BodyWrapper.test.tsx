import React from 'react';
import { render, screen } from '@testing-library/react';
import {BodyWrapper} from './BodyWrapper';

describe('BodyWrapper', () => {
  test('renders body wrapper', () => {
    render(<BodyWrapper data-testid={'body-wrapper'} />);
    const element = screen.getByTestId('body-wrapper');
    expect(element).toBeInTheDocument();
  });

  test('renders body wrapper with styles', () => {
    render(<BodyWrapper data-testid={'body-wrapper'} />);
    const imgElement = screen.getByTestId('body-wrapper');
    expect(imgElement).toHaveStyle('padding: 2rem');
  });
});
