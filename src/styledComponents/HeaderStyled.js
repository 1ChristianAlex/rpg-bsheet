import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import colors from './default';
import { Navbar, Nav, Form, Button, FormControl, NavDropdown } from 'react-bootstrap';

export const HeaderBh = styled.header`
  background-color: ${colors.bgColor};
`;

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
  flex: 0 0 15%;
`;
export const BhNavLink = styled(NavLink)`
  color: white;
  display: block;
  padding: 0.5rem 1rem;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
`;

export const HeaderNavBar = styled(Navbar)`
  flex-flow: wrap;
`;
export const HeaderNavCollapse = styled(Navbar.Collapse)`
  flex-wrap: wrap;
  flex: 0 0 100%;
  flex-basis: 100% !important;
`;
export const HeaderNav = styled(Nav)`
  flex: 0 0 100%;
`;
export const FormHeaderSearch = {
  Nav: styled(Nav)`
    flex: 0 0 80%;
    justify-content: flex-end;
  `,
  Form: styled(Form)`
    position: relative;
    margin: 0 auto;
  `,
  Input: styled(FormControl)`
    background-color: ${colors.bgSoft};
    width: 350px;
  `,
  Button: styled(Button)`
    position: absolute;
    right: 0;
    z-index: 12;
    background-color: ${colors.bgColor};
    color: ${colors.logoColor};
    border: 1px solid ${colors.logoColor};
  `
};
export const ImgMenu = {
  img: styled.img`
    height: 180px;
    width: auto;
    & :hover {
      height: 200px;
    }
  `,
  content: styled.div`
    position: relative;
  `,
  text: styled.span`
    position: absolute;
    font-size: 15pt;
    top: 40%;
    left: 0;
    width: 100%;
    text-align: center;
  `
};
export const HeaderDropwn = {
  DropdownMenu: styled(NavDropdown)`
    display: flex;
    flex-direction: row;
  `
};
