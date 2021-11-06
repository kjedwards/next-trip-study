import React from 'react';
import {RouteType} from '../services/types';
import Select, {SingleValue} from 'react-select';

interface RoutesProps {
  routes: Array<RouteType>;
  updateFunc: (value: SingleValue<{ value: string; label: string; }>, dropdownType: 'route' | 'direction' | 'stop') => void;
}

const Routes = ({ routes, updateFunc } : RoutesProps )  => {
  // Map options
  const options = routes.map(route => {
    return { value: route.route_id, label: route.route_label};
  });

  return (
    <>
      <Select
        options={options}
        onChange={(e) => updateFunc(e, 'route')}
        placeholder={'Find Your Route'}
      />
    </>
  );
};

export default Routes;
