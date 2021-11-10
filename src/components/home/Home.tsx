import React from 'react';
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
          <Column maxWidth={'400px'} padding={'1rem'}>
            <CovidAlert />
          </Column>
          <Column width={'80vw'} minWidth={'250px'} maxWidth={'450px'}>
            <h2>Lorem Ipsum</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <ul>
              <li>
                <StyledLink to={'/routes'}>Stop Finder</StyledLink>
              </li>
              <li>
                <StyledLink to={'#'}>Another Tool</StyledLink>
              </li>
              <li>
                <StyledLink to={'#'}>Another Tool</StyledLink>
              </li>
            </ul>
          </Column>
        </Row>
      </BodyWrapper>
    </>
  );
};
