import React from 'react';
import {
  Link,
} from 'react-router-dom';
import styled from 'styled-components';

interface NavItem {
   label: string;
   link: string;
}

const NavUl = styled.ul`
   list-style-type: none;
   margin: 0;
   padding: 0;
`;

export const Navbar = ({ navItems }: { navItems: NavItem[] }) : JSX.Element => {
  return (
    <nav id="main-nav" aria-label="Main">
      <NavUl>
        <li>
          <Link to={'/'}>
            <img src={'../../images/MetroTransit.svg'} />
          </Link>
        </li>
        {
          navItems.map(item => {
            return (
              <li key={`${item.label}-nav-item`}>
                <Link to={item.link}>{item.label}</Link>
              </li>
            );
          })
        }
      </NavUl>
    </nav>
  );
};
