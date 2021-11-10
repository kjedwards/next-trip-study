import React from 'react';
import styled from 'styled-components';
import {AlertObject} from '../../services/types';

const Alert = styled.div`
  background-color: #ffd200;
  padding: 0.5rem;
  margin: 0.5rem 0;
  width: 100%;
  font-weight: bold;
`;

export const Alerts = ({ alerts }:{ alerts: AlertObject[]} ) => {
  return (
    <div data-testid={'alerts'}>
      {alerts?.map((alert : AlertObject, index: number) => {
        return(
          <Alert key={`alert-${index}`}>
            {alert.stop_closed && <p>STOP CLOSED</p>}
            <p>{alert.alert_text}</p>
          </Alert>
        );
      })}
    </div>
  );
};
