import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeConfig } from '../configs/themeConfig';

export const StyledLink = styled(Link)`
    color: ${ThemeConfig.brand1};
    font-size: large;
    text-decoration: none;
`;
