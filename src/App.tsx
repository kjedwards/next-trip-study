import React from 'react';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import {
  Routes,
  Route,
  Link,
  useSearchParams,
  useParams
} from 'react-router-dom';

import { Layout } from './components/Layout';
import { TransitRouteWrapper } from './components/TransitRouteWrapper';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      suspense: true,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TransitRouteWrapper />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
