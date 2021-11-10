import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import {Navbar} from './Navbar';

describe('Navbar', () => {
  test('renders Navbar with default home link', () => {
    render(<BrowserRouter><Navbar data-testid={'nav'} navItems={[]} /></BrowserRouter>);
    const element = screen.getByAltText('Navigate Home');
    expect(element).toBeInTheDocument();
  });

  test('renders Navbar with navItems', () => {
    render(<BrowserRouter><Navbar data-testid={'nav'} navItems={[{label: 'Test', link: '/test'}]} /></BrowserRouter>);
    const element = screen.getByText('Test');
    expect(element).toBeInTheDocument();
  });
});
