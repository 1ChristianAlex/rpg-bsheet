import React, { Component } from 'react';
import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button
} from 'react-bootstrap';
import {
  BholderLogo,
  BhNavLink,
  HeaderNavBar,
  HeaderNav
} from '../styledComponents/styledLinks';

export default class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <HeaderNavBar expand="lg">
          <BholderLogo className="navbar-brand" to="/">
            Bholder RPG
          </BholderLogo>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
          <BhNavLink to="link">Entrar</BhNavLink>
          <BhNavLink to="link">Registrar</BhNavLink>
          <HeaderNav id="basic-navbar-nav">
            <Nav>
              <BhNavLink to="teste">Teste</BhNavLink>
              <NavDropdown title="Criação" id="basic-nav-dropdown">
                <BhNavLink className="dropdown-item" to="#action/3.1">
                  Action
                </BhNavLink>
                <BhNavLink to="#action/3.2">Meus personagens</BhNavLink>

                <BhNavLink to="#action/3.3">Minhas campanhas</BhNavLink>
                <NavDropdown.Divider />
              </NavDropdown>
              <NavDropdown title="Fontes" id="basic-nav-dropdown">
                <BhNavLink className="dropdown-item" to="#action/3.1">
                  Action
                </BhNavLink>
                <BhNavLink to="#action/3.2">Another action</BhNavLink>
                <BhNavLink to="#action/3.3">Something</BhNavLink>
                <NavDropdown.Divider />
                <BhNavLink to="#action/3.4">Separated link</BhNavLink>
              </NavDropdown>
              <NavDropdown title="Ferramentas" id="basic-nav-dropdown">
                <BhNavLink className="dropdown-item" to="#action/3.1">
                  Action
                </BhNavLink>
                <BhNavLink to="#action/3.2">Another action</BhNavLink>
                <BhNavLink to="#action/3.3">Something</BhNavLink>
                <NavDropdown.Divider />
                <BhNavLink to="#action/3.4">Separated link</BhNavLink>
              </NavDropdown>
            </Nav>
          </HeaderNav>
        </HeaderNavBar>
      </header>
    );
  }
}
