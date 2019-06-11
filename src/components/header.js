import React, { Component } from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { BholderLogo, BhNavLink, HeaderNavBar, HeaderNavCollapse, HeaderNav, FormHeaderSearch, HeaderBh } from '../styledComponents/HeaderStyled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default class Header extends Component {
  render() {
    return (
      <HeaderBh className="App-header">
        <HeaderNavBar expand="lg">
          <BholderLogo className="navbar-brand" to="/">
            Bholder RPG
          </BholderLogo>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <FormHeaderSearch.Nav>
            <FormHeaderSearch.Form inline>
              <FormHeaderSearch.Input type="text" placeholder="Search" className="mr-sm-2" />
              <FormHeaderSearch.Button>
                <FontAwesomeIcon icon={faSearch} />
              </FormHeaderSearch.Button>
            </FormHeaderSearch.Form>
            <BhNavLink to="link">Entrar</BhNavLink>
            <BhNavLink to="link">Registrar</BhNavLink>
          </FormHeaderSearch.Nav>
          <HeaderNavCollapse id="basic-navbar-nav">
            <HeaderNav>
              <BhNavLink to="teste">Teste</BhNavLink>
              <NavDropdown title="Criação" className="header-menu-item">
                <BhNavLink className="dropdown-item" to="#action/3.1">
                  Action
                </BhNavLink>
                <BhNavLink to="#action/3.2">Meus personagens</BhNavLink>
                <BhNavLink to="#action/3.3">Minhas campanhas</BhNavLink>
              </NavDropdown>
              <NavDropdown title="Fontes" className="header-menu-item">
                <BhNavLink className="dropdown-item" to="#action/3.1">
                  Action
                </BhNavLink>
                <BhNavLink to="#action/3.2">Another action</BhNavLink>
                <BhNavLink to="#action/3.3">Something</BhNavLink>

                <BhNavLink to="#action/3.4">Separated link</BhNavLink>
              </NavDropdown>
              <NavDropdown title="Ferramentas" className="header-menu-item">
                <BhNavLink className="dropdown-item" to="#action/3.1">
                  Action
                </BhNavLink>
                <BhNavLink to="#action/3.2">Another action</BhNavLink>
                <BhNavLink to="#action/3.3">Something</BhNavLink>

                <BhNavLink to="#action/3.4">Separated link</BhNavLink>
              </NavDropdown>
            </HeaderNav>
          </HeaderNavCollapse>
        </HeaderNavBar>
      </HeaderBh>
    );
  }
}
