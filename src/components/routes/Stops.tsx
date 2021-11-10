import React from 'react';
import Select, {SingleValue} from 'react-select';
import {StopListType} from '../../services/types';
import {Selection} from './TransitRouteWrapper';

interface StopsProps {
  stops: StopListType[];
  value: SingleValue<Selection>,
  updateFunc: (value: SingleValue<Selection>, dropdownType: 'route' | 'direction' | 'stop') => void;
}

const Stops = ({ stops, value, updateFunc } : StopsProps ) : JSX.Element => {
  // Map options
  const options = stops?.map((stop: StopListType) => {
    return {value: stop.place_code, label: stop.description};
  });

  return (
    <React.Suspense fallback={<h1>LOADING</h1>}>
      <Select
        isSearchable
        options={options}
        onChange={(e) => updateFunc(e || {value: '', label: ''}, 'stop')}
        placeholder={'Choose Stop'}
        value={value?.value && value}
      />
    </React.Suspense>
  );
};

export default Stops;
