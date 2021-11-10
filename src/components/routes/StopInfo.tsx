import React from 'react';
import { useParams } from 'react-router-dom';
import {useQuery} from 'react-query';
import styled from 'styled-components';
import {AlertObject, DepartureObject} from '../../services/types';
import {TransitServiceUrls} from '../../services/TransitServiceUrls';
import { ThemeConfig } from '../configs/themeConfig';
import {Row, Column, SrOnly} from '../styled-components';

const TableTopper = styled.div`
   background: #f5f5f4;
   margin-top: 2rem;
`;

const DepartureTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: #f5f5f4;
  
  thead {
    padding: 1rem;
    display: table-header-group;
    color: ${ThemeConfig.text2};
    
    tr { 
      display: table-row;
      
      th {
        background: ${ThemeConfig.block};
        border-top: none;
        border-bottom: none;
        text-transform: uppercase;
        padding: 1rem;
        text-align: left;
        
        &:last-child {
          text-align: right;
        }
      }
    }
  }
  
  tbody {
    tr {
      td {
         padding: 0.75rem;
         font-size: large;
        
        &:first-child {
          font-weight: bold;
        }
        &:last-child {
          font-weight: bold;
          text-align: right;
        }
      }
    }
  }
`;

const Alert = styled.div`
  background-color: #ffd200;
  padding: 0.5rem;
  margin: 0.5rem 0;
  width: 100%;
  font-weight: bold;
`;

export const StopInfo = () : JSX.Element => {
  const { routeId } = useParams<'routeId'>();
  const { directionId } = useParams<'directionId'>();
  const { stopId } = useParams<'stopId'>();

  // Retrieve Stop Info on Load
  const { data: stopInfo } = useQuery('stopInfo', () =>
    fetch(TransitServiceUrls.getFetchStopInfoUrl( routeId, directionId, stopId )).then((res) => res.json())
  );

  return (
    <React.Suspense fallback={<h1>loading...</h1>}>
      <div>
        {stopInfo.alerts.map((alert : AlertObject, index: number) => {
          return(
            <Alert key={`alert-${index}`}>
              {alert.stop_closed && <p>STOP CLOSED</p>}
              <p>{alert.alert_text}</p>
            </Alert>
          );
        })}
      </div>

      <div>
        <TableTopper>
          <Row alignContent={'center'} justifyContent={'space-between'} width={'100%'}>
            <Column padding={'0.5rem'}>
              <h2>{stopInfo.stops[0].description}</h2>
            </Column>
            <Column justifyContent={'center'} padding={'1rem'}>
              <p><b>Stop #:</b> {stopInfo.stops[0].stop_id}</p>
            </Column>
          </Row>
        </TableTopper>

        <DepartureTable>
          <SrOnly>Departures Table</SrOnly>
          <thead>
            <tr>
              <th>Route</th>
              <th>Direction</th>
              <th>Departs</th>
            </tr>
          </thead>
          <tbody>
            {stopInfo.departures && stopInfo.departures.map((departure : DepartureObject, index: number) => {
              return(
                <tr key={`departure-${index}`}>
                  <td>{departure.route_short_name}</td>
                  <td>{departure.direction_text}</td>
                  <td>{departure.departure_text}</td>
                </tr>
              );
            })}

            {stopInfo.departures.length === 0 && <tr><td>No Departures at this Time</td></tr>}
          </tbody>
        </DepartureTable>
      </div>
    </React.Suspense>
  );
};
