import React from 'react';
import {
  Routes,
  Route,
  Outlet,
  Link,
  useSearchParams,
  useParams
} from 'react-router-dom';

export const Layout = () : JSX.Element  => {
  return(
    <>
      <h1>Header</h1>
      <Outlet />
    </>
  );
};
