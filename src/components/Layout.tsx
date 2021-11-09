import React from 'react';
import {
  Outlet,
} from 'react-router-dom';

import {NavConfig} from './configs/navConfig';
import { Navbar } from './styled-components';

export const Layout = () : JSX.Element  => {
  return(
    <>
      <header>
        <Navbar navItems={NavConfig}/>
      </header>
      <main>
        <h1>Header</h1>
        <Outlet />
      </main>
    </>
  );
};
