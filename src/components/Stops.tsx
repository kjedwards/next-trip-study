import React from 'react';
import Select, {SingleValue} from 'react-select';
import {StopListType} from '../services/types';

interface StopsProps {
  stops: StopListType[];
  value: SingleValue<{ value: string | number; label: string; }>,
  updateFunc: (value: SingleValue<{ value: string | number; label: string; }>, dropdownType: 'route' | 'direction' | 'stop') => void;
}

const Stops = ({ stops, value, updateFunc } : StopsProps ) : JSX.Element => {
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
        value={value}
      />
    </React.Suspense>
  );
};

export default Stops;
