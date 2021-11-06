import React, {lazy, useState} from 'react';
import {QueryErrorResetBoundary, useQuery} from 'react-query';
import {TransitServiceUrls} from '../services/TransitServiceUrls';
import {ErrorBoundary} from 'react-error-boundary';
import {SingleValue} from 'react-select';

const Routes = lazy(() => import('./Routes'));
const Directions = lazy(() => import('./Directions'));
const Stops = lazy(() => import('./Stops'));

const loadingComponent = () => <h1>Loading routes...</h1>;

export const TransitRouteWrapper = () : JSX.Element  => {
  // User Selections
  const [routeSelection, updateRouteSelection] = useState<SingleValue<{ value: string; label: string; }>>({value: '', label: ''});
  const [directionSelection, updateDirectionSelection] = useState<SingleValue<{ value: string; label: string; }>>({value: '', label: ''});
  const [stopSelection, updateStopSelection] = useState<SingleValue<{ value: string; label: string; }>>({value: '', label: ''});

  // Update User Selection
  const updateUserSelection = (value: SingleValue<{ value: string; label: string; }>, dropdownType: 'route' | 'direction' | 'stop') => {
    if (dropdownType === 'route') {
      updateRouteSelection(value);
    } else if (dropdownType === 'direction') {
      updateDirectionSelection(value);
    } else if (dropdownType === 'stop') {
      updateStopSelection(value);
    }

    console.log('routeNum', routeSelection);
    console.log('direction', directionSelection);
  };

  // Retrieve Routes on Load
  const { data: routes } = useQuery('routes', () =>
    fetch(TransitServiceUrls.getFetchRoutesUrl()).then((res) => res.json())
  );

  return (
    <React.Suspense fallback={loadingComponent}>
      <QueryErrorResetBoundary>
        {({ reset }) => (
        //TODO: Set up error page
          <ErrorBoundary
            fallbackRender={({ error, resetErrorBoundary }) => (
              <div>
                <button onClick={() => resetErrorBoundary()}>Try again</button>
                <pre style={{ whiteSpace: 'normal' }}>{error.message}</pre>
              </div>
            )}
            onReset={reset}
          >
            <Routes routes={routes} updateFunc={updateUserSelection} />
            { routeSelection && <Directions routeNumber={routeSelection.value} updateFunc={updateUserSelection} /> }
            { routeSelection && directionSelection && <Stops routeNumber={routeSelection.value} directionId={directionSelection.value} updateFunc={updateUserSelection} /> }
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </React.Suspense>
  );
};
