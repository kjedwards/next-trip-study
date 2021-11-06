import React from 'react';
import Select, {SingleValue} from 'react-select';
import {useQuery} from 'react-query';
import {TransitServiceUrls} from '../services/TransitServiceUrls';
import {RouteDirectionType} from '../services/types';

interface DirectionsProps {
    routeNumber: string,
    updateFunc: (value: SingleValue<{ value: string; label: string; }>, dropdownType: 'route' | 'direction' | 'stop') => void;
}

const Directions = ({ routeNumber, updateFunc } : DirectionsProps )  => {
  if (routeNumber) {
    // Retrieve Directions on Load
    const {data, isFetching, isLoading, error} = useQuery('directions', () =>
      fetch(TransitServiceUrls.getFetchDirectionsUrl(routeNumber)).then((res) => res.json())
    );

    console.log(data);

    let options = [];
    if (!isLoading && !isFetching && !error) {
      // Map options
      options = data?.map((direction: RouteDirectionType) => {
        return {value: direction.direction_id, label: direction.direction_name};
      });
    }

    return (
      <React.Suspense fallback={<h1>LOADING</h1>}>
        <Select
          options={options}
          onChange={(e: SingleValue<{ value: string; label: string; }>) => updateFunc(e, 'direction')}
          placeholder={'Choose Direction'}
        />
      </React.Suspense>
    );
  } else {
    return null;
  }
};

export default Directions;
