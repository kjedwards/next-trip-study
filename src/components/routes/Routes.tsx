import React from 'react';
import Select, {SingleValue} from 'react-select';
import {RouteType} from '../../services/types';
import {Row, Column} from '../styled-components';
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
    <Row justifyContent={'center'}>
      <Column minWidth={'300px'} width={'80%'} maxWidth={'1200px'} padding={'1rem'}>
        <Select
          isSearchable
          options={options}
          onChange={(e) => updateFunc(e || {value: '', label: ''}, 'route')}
          placeholder={'Find Your Route'}
          value={value?.value && value}
        />
      </Column>
    </Row>
  );
};

export default Routes;
