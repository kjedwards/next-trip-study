import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import {QueryClient, QueryClientProvider} from 'react-query';
import fetchMock from 'fetch-mock';
import {StopInfo} from './StopInfo';

// const emptyData = { data: { alerts: [], departures: [], stops: []} };

describe('StopInfo', () => {
  afterEach( () => {
    fetchMock.restore();
  });

  let queryClient = new QueryClient();

  const renderStopInfo = () => {
    queryClient = new QueryClient();
    return render(
      <MemoryRouter initialEntries={['/routes/1/1/STOP']}>
        <QueryClientProvider client={queryClient}>
          <StopInfo />
        </QueryClientProvider>
      </MemoryRouter>
    );
  };

  test('renders StopInfo', () => {
    renderStopInfo() ;
    const element = screen.getByText('Departures Table');
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
