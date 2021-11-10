import styled from 'styled-components';

export const Row = styled.div<{wrap?: string, alignContent?: string, justifyContent?: string, width?: string, padding?: string}>`
  display: flex;
  flex-wrap: ${props => props.wrap || 'auto'};    
  align-content: ${props => props.alignContent || 'auto'}; 
  justify-content: ${props => props.justifyContent || 'auto'}; 
  width: ${props => props.width || 'auto'}; 
  padding: ${props => props.padding || 'auto'}; 
`;
