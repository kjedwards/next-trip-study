import React from 'react';
import { render, screen } from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import {QueryClient, QueryClientProvider} from 'react-query';
import fetchMock from 'fetch-mock';
import {TransitRouteWrapper} from './TransitRouteWrapper';

// const emptyData = { data: { alerts: [], departures: [], stops: []} };

describe('TransitRouteWrapper', () => {
  afterEach( () => {
    fetchMock.restore();
  });

  let queryClient = new QueryClient();

  const renderTransitRouteWrapper = () => {
    queryClient = new QueryClient();
    return render(
      <MemoryRouter initialEntries={['/routes']}>
        <QueryClientProvider client={queryClient}>
          <TransitRouteWrapper />
        </QueryClientProvider>
      </MemoryRouter>
    );
  };

  test('renders TransitRouteWrapper', () => {
    renderTransitRouteWrapper();
    const element = screen.getByText('Stop Finder');
    expect(element).toBeInTheDocument();
  });

  // test('runs the query for stop information', async () => {
  //   fetchMock.mock('https://svc.metrotransit.org/nextripv2/1/1/STOP', emptyData);
  //
  //   renderStopInfo();
  //
  //   await waitFor(() => expect(fetchMock).toHaveBeenCalled());
  //
  //   const data = queryClient.getQueryData('stopInfo');
  //
  //   expect(queryClient.getQueryData('stopInfo')).toEqual(emptyData.data);
  // });
});
