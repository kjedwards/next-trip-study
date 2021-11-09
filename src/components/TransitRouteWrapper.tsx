import React, {lazy, useEffect, useState} from 'react';
import {QueryErrorResetBoundary, useQuery} from 'react-query';
import {TransitServiceUrls} from '../services/TransitServiceUrls';
import {ErrorBoundary} from 'react-error-boundary';
import {SingleValue} from 'react-select';
import {Navigate, Outlet, useParams} from 'react-router-dom';

import {RouteDirectionType, RouteType, StopListType} from '../services/types';

const Routes = lazy(() => import('./Routes'));
const Directions = lazy(() => import('./Directions'));
const Stops = lazy(() => import('./Stops'));

export const TransitRouteWrapper = () : JSX.Element  => {
  const { routeId } = useParams<'routeId'>();
  const { directionId } = useParams<'directionId'>();
  const { stopId } = useParams<'stopId'>();

  // User Selections
  const [routeSelection, updateRouteSelection] = useState<SingleValue<{ value: string | number; label: string; }>>({value: '', label: ''});
  const [directionSelection, updateDirectionSelection] = useState<SingleValue<{ value: string | number; label: string; }>>({value: '', label: ''});
  const [stopSelection, updateStopSelection] = useState<SingleValue<{ value: string | number; label: string; }>>({value: '', label: ''});

  // Update User Selection
  const updateUserSelection = (value: SingleValue<{ value: string | number; label: string; }>, dropdownType: 'route' | 'direction' | 'stop') => {
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

  // Retrieve Stops on route selection change
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
    if (routes && routeId && !routeSelection?.value) {
      const routeFromUrl = routes.find((route :RouteType) => route.route_id === routeId);
      updateRouteSelection({
        value: routeId,
        label: routeFromUrl.route_label,
      });
    }
  }, [routes, routeId, routeSelection]);

  useEffect(() => {
    if (directions && directionId && !directionSelection?.value) {
      const directionFromUrl = directions.find((direction :RouteDirectionType) => direction.direction_id.toString() === directionId);
      updateDirectionSelection({
        value: directionId,
        label: directionFromUrl.direction_name,
      });
    }
  }, [directions, directionId, directionSelection]);

  useEffect(() => {
    if (stops && stopId && !stopSelection?.value) {
      const stopFromUrl = stops.find((stop :StopListType) => stop.place_code === stopId);
      updateStopSelection({
        value: stopId,
        label: stopFromUrl.description,
      });
    }
  }, [stops, stopId, stopSelection]);

  return (
    <React.Suspense fallback={<h1>loading</h1>}>
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
            <Routes routes={routes} value={routeSelection} updateFunc={updateUserSelection} />
            { directions && <Directions directions={directions} value={directionSelection} updateFunc={updateUserSelection} /> }
            { stops && <Stops stops={stops} value={stopSelection} updateFunc={updateUserSelection} /> }
            {
              routeSelection?.value && directionSelection?.value && stopSelection?.value && !routeId
              && <Navigate to={`/routes/${routeSelection.value}/${directionSelection.value}/${stopSelection.value}`} />
            }
            <Outlet />
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </React.Suspense>
  );
};
