import React from 'react';
import { useParams } from 'react-router-dom';
import {useQuery} from 'react-query';
import {TransitServiceUrls} from '../services/TransitServiceUrls';

export const StopInfo = () : JSX.Element => {
  const { routeId } = useParams<'routeId'>();
  const { directionId } = useParams<'directionId'>();
  const { stopId } = useParams<'stopId'>();

  // Retrieve Stop Info on Load
  const { data: stopInfo } = useQuery('stopInfo', () =>
    fetch(TransitServiceUrls.getFetchStopInfoUrl( routeId, directionId, stopId )).then((res) => res.json())
  );

  return (
    <React.Suspense fallback={<h1>loading...</h1>}>
      { stopInfo.toString() }
    </React.Suspense>
  );
};
