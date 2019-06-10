import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import colors from './defaultColors';
import { Navbar } from 'react-bootstrap';

export const BholderLogo = styled(NavLink)`
  font-family: 'Permanent Marker', cursive;
  text-transform: uppercase;
  font-size: ${props => props.textSize || '20pt'};
  color: ${colors.logoColor}!important;
  display: inline-block;
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  margin-right: 1rem;
  line-height: inherit;
  white-space: nowrap;
`;
export const BhNavLink = styled(NavLink)`
  color: red;
  display: block;
  padding: 0.5rem 1rem;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
`;
export const HeaderNavBar = styled(Navbar)`
  flex-flow: wrap;
`;
export const HeaderNav = styled(Navbar.Collapse)`
  flex: 0 0 100%;
  flex-basis: 100% !important;
`;

export const TesteFlex = {
  container: styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  `,
  item: styled.div`
    flex: 0 0 25%;
  `
};
export const TesteGrid = {
  wraper: styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
  `,
  col: styled.div`
    grid-row: 1;
    grid-column: span 6;
  `
};
