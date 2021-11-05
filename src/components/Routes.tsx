import {RouteType} from '../services/types';
import React from 'react';

interface RoutesProps {
    routes: Array<RouteType>;
}

const Routes = ({ routes } : RoutesProps )  => {
  return (
    <>
      {routes?.map((route : RouteType) => (
        <p key={route.route_id}>
          {route.route_label}
        </p>
      ))}
    </>
  );
};

export default Routes;
