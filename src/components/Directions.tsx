import React from 'react';
import Select, {SingleValue} from 'react-select';
import {RouteDirectionType} from '../services/types';

interface DirectionsProps {
    directions: RouteDirectionType[],
    value: SingleValue<{ value: string | number; label: string; }>,
    updateFunc: (value: SingleValue<{ value: string | number; label: string; }>, dropdownType: 'route' | 'direction' | 'stop') => void;
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
        onChange={(e) => updateFunc(e, 'direction')}
        placeholder={'Choose Direction'}
        value={value}
      />
    </React.Suspense>
  );
};

export default Directions;
