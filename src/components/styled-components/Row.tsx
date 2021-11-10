import React from 'react';
import styled from 'styled-components';

export const Row = styled.div<{wrap?: string}>`
  display: flex;
  flex-wrap: ${props => props.wrap || 'auto'};    
`;
