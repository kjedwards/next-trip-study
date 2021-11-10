import React from 'react';
import Select, {SingleValue} from 'react-select';
import {RouteDirectionType} from '../../services/types';
import {Selection} from './TransitRouteWrapper';

interface DirectionsProps {
    directions: RouteDirectionType[],
    value: SingleValue<Selection>,
    updateFunc: (value: SingleValue<Selection>, dropdownType: 'route' | 'direction' | 'stop') => void;
}

const Directions = ({ directions, value, updateFunc } : DirectionsProps ) : JSX.Element => {

  // Map options
  const options = directions?.map((direction: RouteDirectionType) => {
    return {value: direction.direction_id, label: direction.direction_name};
  });

  return (
    <React.Suspense fallback={<h1>LOADING</h1>}>
      <Select
        options={options}
        onChange={(e) => updateFunc(e || {value: '', label: ''}, 'direction')}
        placeholder={'Choose Direction'}
        value={value?.value && value}
      />
    </React.Suspense>
  );
};

export default Directions;
