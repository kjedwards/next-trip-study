import React from 'react';
import Select, {SingleValue} from 'react-select';
import {RouteDirectionType} from '../services/types';

interface DirectionsProps {
    directions: RouteDirectionType[],
    updateFunc: (value: SingleValue<{ value: string | number; label: string; }>, dropdownType: 'route' | 'direction' | 'stop') => void;
}

const Directions = ({ directions, updateFunc } : DirectionsProps )  => {

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
      />
    </React.Suspense>
  );
};

export default Directions;
