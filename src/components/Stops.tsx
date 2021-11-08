import React from 'react';
import Select, {SingleValue} from 'react-select';
import {useQuery} from 'react-query';
import {TransitServiceUrls} from '../services/TransitServiceUrls';
import {StopListType} from '../services/types';

interface StopsProps {
  stops: StopListType[];
  updateFunc: (value: SingleValue<{ value: string; label: string; }>, dropdownType: 'route' | 'direction' | 'stop') => void;
}

const Stops = ({ stops, updateFunc } : StopsProps )  => {
  // Map options
  const options = stops?.map((stop: StopListType) => {
    return {value: stop.place_code, label: stop.description};
  });

  return (
    <React.Suspense fallback={<h1>LOADING</h1>}>
      <Select
        options={options}
        onChange={(e) => updateFunc(e, 'stop')}
        placeholder={'Choose Stop'}
      />
    </React.Suspense>
  );
};

export default Stops;
