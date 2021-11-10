import React from 'react';
import { render, screen } from '@testing-library/react';
import {Alerts} from './Alerts';

const AlertsMock = [
  {
    stop_closed: true,
    alert_text: 'This stop is closed permanently',
  },
  {
    stop_closed: false,
    alert_text: 'There has been a delay at this stop',
  },
];

describe('Alerts', () => {
  test('renders Alerts', () => {
    render(<Alerts alerts={AlertsMock} />);
    const element = screen.getByTestId('alerts');
    expect(element).toBeInTheDocument();
  });

  test('renders Stop alerts', () => {
    render(<Alerts alerts={AlertsMock} />);
    expect(screen.getByText('STOP CLOSED')).toBeInTheDocument();
    expect(screen.getByText('This stop is closed permanently')).toBeInTheDocument();
    expect(screen.getByText('There has been a delay at this stop')).toBeInTheDocument();
  });

  test('does not render stop closed when no stops are closed', () => {
    const AlertsMockNoStopClosed = [AlertsMock[1]];
    
    render(<Alerts alerts={AlertsMockNoStopClosed} />);
    expect(screen.queryByText('STOP CLOSED')).not.toBeInTheDocument();
    expect(screen.queryByText('This stop is closed permanently')).not.toBeInTheDocument();
    expect(screen.queryByText('There has been a delay at this stop')).toBeInTheDocument();
  });
});
