import React from 'react';
import {Link} from 'react-router-dom';
import BannerHome from '../../images/BannerHome.jpg';
import {BannerImage, BodyWrapper} from '../styled-components';
import {CovidAlert} from './CovidAlert';
import {Row} from '../styled-components/Row';
import {Column} from '../styled-components/Column';
import {StyledLink} from '../styled-components/StyledLink';

export const Home = () : JSX.Element => {
  return (
    <>
      <BannerImage src={BannerHome} alt={'Commuters waiting at a bus stop'} />
      <BodyWrapper>
        <Row wrap={'wrap'}>
          <Column>
            <CovidAlert />
          </Column>
          <Column maxWidth="500px">
            <h2>Lorem Ipsum</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <ul>
              <li>
                <Link to={'/routes'}>Stop Finder</Link>
              </li>
              <li>
                <Link to={'#'}>Another Tool</Link>
              </li>
              <li>
                <Link to={'#'}>Another Tool</Link>
              </li>
            </ul>
          </Column>
        </Row>
      </BodyWrapper>
    </>
  );
};
