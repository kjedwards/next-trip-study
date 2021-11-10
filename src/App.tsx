import React from 'react';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import {
  Routes,
  Route,
} from 'react-router-dom';

import { Layout } from './components/Layout';
import { Home } from './components/home/Home';
import { TransitRouteWrapper } from './components/routes/TransitRouteWrapper';
import { StopInfo } from './components/routes/StopInfo';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      suspense: true,
    },
  },
});

function App() : JSX.Element {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <QueryClientProvider client={queryClient}>
        <Routes data-testid={'app'}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path={'/routes'} element={<TransitRouteWrapper />}>
              <Route path={'/routes/:routeId/:directionId/:stopId'} element={<StopInfo />} />
            </Route>
          </Route>
        </Routes>
      </QueryClientProvider>
    </React.Suspense>
  );
}

export default App;
