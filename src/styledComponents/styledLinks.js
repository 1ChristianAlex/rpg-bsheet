import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import colors from './defaultColors';
import { Nav } from 'react-bootstrap';

export const BholderLogo = styled(NavLink)`
  font-family: 'Permanent Marker', cursive;
  text-transform: uppercase;
  font-size: ${props => props.textSize || '20pt'};
  color: ${colors.logoColor}!important;
`;
export const BhNavLink = styled(NavLink)`
  color: red;
`;

console.log(Nav.Link);
