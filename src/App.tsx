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
import { Home } from './components/Home';
import { TransitRouteWrapper } from './components/TransitRouteWrapper';
import { StopInfo } from './components/StopInfo';

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
    <React.Suspense fallback={<div>boop</div>}>
      <QueryClientProvider client={queryClient}>
        <Routes>
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
