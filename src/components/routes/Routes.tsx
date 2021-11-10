import React from 'react';
import {RouteType} from '../../services/types';
import Select, {SingleValue} from 'react-select';
import {Selection} from './TransitRouteWrapper';

interface RoutesProps {
  routes: RouteType[];
  value: SingleValue<Selection>,
  updateFunc: (value: SingleValue<Selection>, dropdownType: 'route' | 'direction' | 'stop') => void;
}

const Routes = ({ routes, value, updateFunc } : RoutesProps ) : JSX.Element  => {
  // Map options
  const options = routes.map(route => {
    return { value: route.route_id, label: route.route_label};
  });

  return (
    <>
      <Select
        isSearchable
        options={options}
        onChange={(e) => updateFunc(e || {value: '', label: ''}, 'route')}
        placeholder={'Find Your Route'}
        value={value?.value && value}
      />
    </>
  );
};

export default Routes;
