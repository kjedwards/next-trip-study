import React from 'react';
import styled from 'styled-components';
import { ThemeConfig } from '../configs/themeConfig';

const Block = styled.div`
  color: ${ThemeConfig.text2};
  background-color: ${ThemeConfig.block};
  padding: 2rem;
  border-radius: 0.5rem;
  
  p {
    font-size: x-large;
    line-height: 3rem;
  }
`;

export const CovidAlert = () : JSX.Element => {
  return(
    <Block>
      <h1>We are Socially Distancing</h1>
      <p>In accordance with government guidelines, please ensure you wear a mask and keep a distance of <b>6 feet</b> at all times.</p>
    </Block>
  );
};
