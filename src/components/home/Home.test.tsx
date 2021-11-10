import React from 'react';
import { render, screen } from '@testing-library/react';
import {Home} from './Home';
import {BrowserRouter} from 'react-router-dom';

describe('Home', () => {
  test('renders Home with link to stop finder', () => {
    render(<BrowserRouter><Home /></BrowserRouter>);
    const element = screen.getByText('Stop Finder');
    expect(element).toBeInTheDocument();
  });
});
