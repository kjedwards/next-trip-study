import React from 'react';
import {
  Link,
} from 'react-router-dom';
import styled from 'styled-components';
import { ThemeConfig } from '../configs/themeConfig';
import MetroTransitLogo from '../../images/MetroTransitLogo.svg';

interface NavItem {
   label: string;
   link: string;
}

const Nav = styled.nav`
    background-color: ${ThemeConfig.nav};
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 60px;
    padding: 10px;
    display: flex;
    align-items: center;
    filter: drop-shadow(0px 2px 6px ${ThemeConfig.text1});
`;

const NavUl = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
`;

const NavLi = styled.li`
  padding: 0 20px;
  height: max-content;
`;

const NavLink = styled(Link)`
  margin: 0;
  text-decoration: none;
  font-size: larger;
  color: ${ThemeConfig.text1};
  
  &:hover: {
    color: ${ThemeConfig.brand2};
  }
`;

export const Navbar = ({ navItems }: { navItems: NavItem[] }) : JSX.Element => {
  return (
    <Nav id="main-nav" aria-label="Main">
      <NavUl>
        <li>
          <Link to={'/'}>
            <img src={MetroTransitLogo} alt={'Navigate Home'} />
          </Link>
        </li>
        {
          navItems.map(item => {
            return (
              <NavLi key={`${item.label}-nav-item`}>
                <NavLink to={item.link}>{item.label}</NavLink>
              </NavLi>
            );
          })
        }
      </NavUl>
    </Nav>
  );
};
