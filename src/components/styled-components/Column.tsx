import styled from 'styled-components';

export const Column = styled.div<{ minWidth?: string, width?: string, maxWidth?: string, alignContent?: string, justifyContent?: string, padding?: string }>`
  display: flex;
  flex-direction: column;
  padding: ${props => props.padding || '3rem'};    
  min-width: ${props => props.minWidth || 'auto'};
  width: ${props => props.width || 'auto'};
  max-width: ${props => props.maxWidth || 'auto'};
  align-content: ${props => props.alignContent || 'auto'}; 
  justify-content: ${props => props.justifyContent || 'auto'}; 
`;
