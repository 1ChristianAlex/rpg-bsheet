import React, { Component } from 'react';
import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {
  BholderLogo,
  BhNavLink,
  LoginHeader,
  NavMenuItem
} from '../styledComponents/styledLinks';

export default class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <Navbar>
          <BholderLogo className="navbar-brand" to="#home">
            Bholder RPG
          </BholderLogo>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <LoginHeader>
              <BhNavLink to="link">Entrar</BhNavLink>
              <BhNavLink to="link">Registrar</BhNavLink>
            </LoginHeader>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
          <Navbar.Collapse>
            <NavMenuItem>
              <Nav>
                <Nav.Link>Teste</Nav.Link>
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
            </NavMenuItem>
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
}
