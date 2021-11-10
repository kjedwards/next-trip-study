import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import {StyledLink} from './StyledLink';

describe('StyledLink', () => {
  test('renders StyledLink', () => {
    render(<BrowserRouter><StyledLink to={'/'}>Test</StyledLink></BrowserRouter>);
    const element = screen.getByText('Test');
    expect(element).toBeInTheDocument();
  });

  test('renders StyledLink with default styles', () => {
    render(<BrowserRouter><StyledLink to={'/'}>Test</StyledLink></BrowserRouter>);
    const element = screen.getByText('Test');
    expect(element).toHaveStyle('text-decoration: none');
  });
});
