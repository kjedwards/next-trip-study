import React from 'react';
import styled from 'styled-components';
import {Column, Row, SrOnly} from '../styled-components';
import {DepartureObject, StopObject} from '../../services/types';
import {ThemeConfig} from '../configs/themeConfig';

const TableTopper = styled.div`
   background: #f5f5f4;
   margin-top: 2rem;
`;

const Table = styled.table`
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

export const DepartureTable = ({stops, departures} : {stops: StopObject[], departures: DepartureObject[]}) => {
  return(
    <div data-testid={'departure-table'}>
      <TableTopper>
        <Row alignContent={'center'} justifyContent={'space-between'} width={'100%'}>
          <Column padding={'0.5rem'}>
            <h2>{stops && stops[0].description}</h2>
          </Column>
          <Column justifyContent={'center'} padding={'1rem'}>
            <p><b>Stop #:</b> {stops && stops[0].stop_id}</p>
          </Column>
        </Row>
      </TableTopper>

      <Table>
        <SrOnly>Departures Table</SrOnly>
        <thead>
          <tr>
            <th>Route</th>
            <th>Direction</th>
            <th>Departs</th>
          </tr>
        </thead>
        <tbody>
          {departures && departures.map((departure : DepartureObject, index: number) => {
            return(
              <tr key={`departure-${index}`}>
                <td>{departure.route_short_name}</td>
                <td>{departure.direction_text}</td>
                <td>{departure.departure_text}</td>
              </tr>
            );
          })}

          {departures && departures.length === 0 && <tr><td>No Departures at this Time</td></tr>}
        </tbody>
      </Table>
    </div>
  );
};
