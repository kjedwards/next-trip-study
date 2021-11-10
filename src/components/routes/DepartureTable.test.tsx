import React from 'react';
import { render, screen } from '@testing-library/react';
import {DepartureTable} from './DepartureTable';

const stopsMock = [
  {
    stop_id: 12345,
    description: 'Stop A',
  }
];

const departuresMock = [
  {
    route_short_name: 'Green',
    direction_text: 'Westbound',
    departure_text: '10 min',
  }
];

describe('DepartureTable', () => {
  test('renders DepartureTable', () => {
    render(<DepartureTable stops={stopsMock} departures={departuresMock} />);
    const element = screen.getByTestId('departure-table');
    expect(element).toBeInTheDocument();
  });

  test('renders Stop information', () => {
    render(<DepartureTable stops={stopsMock} departures={departuresMock} />);
    expect(screen.getByText('Stop A')).toBeInTheDocument();
    expect(screen.getByText('12345')).toBeInTheDocument();
  });

  test('renders Departure information', () => {
    render(<DepartureTable stops={stopsMock} departures={departuresMock} />);
    expect(screen.getByText('Green')).toBeInTheDocument();
    expect(screen.getByText('Westbound')).toBeInTheDocument();
    expect(screen.getByText('10 min')).toBeInTheDocument();
  });
});
