import React from 'react';
import styled from 'styled-components';

export const Column = styled.div<{ minWidth?: string, maxWidth?: string }>`
  display: flex;
  flex-direction: column;
  padding: 3rem;    
  min-width: ${props => props.minWidth || 'auto'};
  max-width: ${props => props.maxWidth || 'auto'};
`;
