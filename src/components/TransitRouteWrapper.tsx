import React, {lazy, useState, useEffect} from 'react';
import {QueryErrorResetBoundary, useQuery} from 'react-query';
import {TransitServiceUrls} from '../services/TransitServiceUrls';
import {ErrorBoundary} from 'react-error-boundary';
import {SingleValue} from 'react-select';
import {RouteDirectionType, StopType} from '../services/types';

const Routes = lazy(() => import('./Routes'));
const Directions = lazy(() => import('./Directions'));
const Stops = lazy(() => import('./Stops'));

const loadingComponent = () => <h1>Loading routes...</h1>;

export const TransitRouteWrapper = () : JSX.Element  => {
  // User Selections
  const [routeSelection, updateRouteSelection] = useState<SingleValue<{ value: string | number; label: string; }>>({value: '', label: ''});
  const [directionSelection, updateDirectionSelection] = useState<SingleValue<{ value: string | number; label: string; }>>({value: -1, label: ''});
  const [stopSelection, updateStopSelection] = useState<SingleValue<{ value: string | number; label: string; }>>({value: '', label: ''});

  // Update User Selection
  const updateUserSelection = (value: SingleValue<{ value: string | number; label: string; }>, dropdownType: 'route' | 'direction' | 'stop') => {
    console.log(value);

    if (dropdownType === 'route') {
      updateRouteSelection(value);
    } else if (dropdownType === 'direction') {
      updateDirectionSelection(value);
    } else if (dropdownType === 'stop') {
      updateStopSelection(value);
    }
  };

  // Retrieve Routes on Load
  const { data: routes } = useQuery('routes', () =>
    fetch(TransitServiceUrls.getFetchRoutesUrl()).then((res) => res.json())
  );

  // Retrieve Directions on route selection change
  const { data: directions } = useQuery(
    ['directions', routeSelection?.value],
    () =>
      routeSelection?.value && fetch(TransitServiceUrls.getFetchDirectionsUrl(routeSelection.value)).then((res) => res.json()),
    {
      // The query will not execute until the routeSelection exists
      enabled: !!routeSelection?.value,
    }
  );

  // Retrieve Directions on route selection change
  const { data: stops } = useQuery(
    ['stops', directionSelection?.value],
    () =>
      routeSelection?.value
        && directionSelection?.value
        && fetch(TransitServiceUrls.getFetchStopsUrl(routeSelection.value, directionSelection.value)).then((res) => res.json()),
    {
      // The query will not execute until the routeSelection exists
      enabled: !!routeSelection?.value && !!directionSelection?.value,
    }
  );

  useEffect(() => {
    console.log('route', routeSelection);
    console.log('direction', directionSelection);
    console.log('directions', directions);
  }, [routeSelection, directionSelection, directions]);

  // Retrieve stops on route and direction selection change
  // useEffect(() => {
  //   stops = useQuery('stops', () =>
  //     fetch(TransitServiceUrls.getFetchStopsUrl(routeSelection?.value, directionSelection?.value)).then((res) => res.json())
  //   ).data;
  // }, [routeSelection, directionSelection]);

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
            { directions && <Directions directions={directions} updateFunc={updateUserSelection} /> }
            { stops && <Stops stops={stops} updateFunc={updateUserSelection} /> }
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </React.Suspense>
  );
};
