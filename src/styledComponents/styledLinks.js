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
  display: block;
  padding: 0.5rem 1rem;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
`;
export const LoginHeader = styled(Nav)``;
export const NavMenuItem = styled.div`
  width: 100%;
`;

console.log(Nav.Link);
