import React from 'react';
import Select, {SingleValue} from 'react-select';
import {StopListType} from '../../services/types';
import {Row, Column} from '../styled-components';
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
    <Row justifyContent={'center'} data-testid={'stop-dropdown'}>
      <Column minWidth={'300px'} width={'80%'} maxWidth={'1200px'} padding={'1rem'}>
        <Select
          isSearchable
          options={options}
          onChange={(e) => updateFunc(e || {value: '', label: ''}, 'stop')}
          placeholder={'Choose Stop'}
          value={value?.value && value}
        />
      </Column>
    </Row>
  );
};

export default Stops;
