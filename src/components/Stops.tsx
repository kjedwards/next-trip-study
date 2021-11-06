import React from 'react';
import Select, {SingleValue} from 'react-select';
import {useQuery} from 'react-query';
import {TransitServiceUrls} from '../services/TransitServiceUrls';
import {RouteDirectionType, StopType} from '../services/types';

interface StopsProps {
  routeNumber: string,
  directionId: string,
  updateFunc: (value: SingleValue<{ value: string; label: string; }>, dropdownType: 'route' | 'direction' | 'stop') => void;
}

const Stops = ({ routeNumber, directionId, updateFunc } : StopsProps )  => {
  if (routeNumber && directionId) {
    // Retrieve Stops on Load
    const {data} = useQuery('stops', () =>
      fetch(TransitServiceUrls.getFetchStopsUrl(routeNumber, directionId)).then((res) => res.json())
    );

    console.log(data);

    // Map options
    const options = data?.map((direction: RouteDirectionType) => {
      return {value: direction.direction_id, label: direction.direction_name};
    });

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

export default Stops;
