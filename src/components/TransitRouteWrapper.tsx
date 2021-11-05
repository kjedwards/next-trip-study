import React, {lazy} from 'react';
import {QueryErrorResetBoundary, useQuery} from 'react-query';
import {TransitServiceUrls} from '../services/TransitServiceUrls';
import {ErrorBoundary} from 'react-error-boundary';

const Routes = lazy(() => import('./Routes'));

const loadingComponent = () => <h1>Loading routes...</h1>;

export const TransitRouteWrapper = () : JSX.Element  => {
  const { data: routes } = useQuery('routes', () =>
    fetch(
      TransitServiceUrls.fetchRoutes
    ).then((res) => res.json())
  );

  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          fallbackRender={({ error, resetErrorBoundary }) => (
            <div>
                            There was an error!{' '}
              <button onClick={() => resetErrorBoundary()}>Try again</button>
              <pre style={{ whiteSpace: 'normal' }}>{error.message}</pre>
            </div>
          )}
          onReset={reset}
        >
          <React.Suspense fallback={loadingComponent}>
            <div>
              <Routes routes={routes} />
            </div>
          </React.Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
};
