import React, { Component } from 'react';
import {
  BholderLogo,
  BhNavLink,
  HeaderNavBar,
  HeaderNavCollapse,
  HeaderNav,
  FormHeaderSearch,
  HeaderBh,
  ImgMenu,
  HeaderDropwn
} from '../styledComponents/HeaderStyled';
import { Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import mycampain from '../assets/imagens/menu-img/mycampain.jpg';
import mycreation from '../assets/imagens/menu-img/mycreation.jpg';

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
              <HeaderDropwn.DropdownMenu title="Criação" className="header-menu-item">
                <BhNavLink className="dropdown-item" to="#action/3.1">
                  <ImgMenu.content>
                    <ImgMenu.img src={mycampain} alt="" srcset="" />
                    <ImgMenu.text>Minha Campanha</ImgMenu.text>
                  </ImgMenu.content>
                </BhNavLink>
                <BhNavLink className="dropdown-item" to="#action/3.1">
                  <ImgMenu.content>
                    <ImgMenu.img src={mycreation} alt="" srcset="" />
                    <ImgMenu.text>Minhas Criações</ImgMenu.text>
                  </ImgMenu.content>
                </BhNavLink>
                <BhNavLink to="#action/3.3">Minhas campanhas</BhNavLink>
              </HeaderDropwn.DropdownMenu>
              <HeaderDropwn.DropdownMenu title="Fontes" className="header-menu-item">
                <BhNavLink className="dropdown-item" to="#action/3.1">
                  Action
                </BhNavLink>
                <BhNavLink to="#action/3.2">Another action</BhNavLink>
                <BhNavLink to="#action/3.3">Something</BhNavLink>

                <BhNavLink to="#action/3.4">Separated link</BhNavLink>
              </HeaderDropwn.DropdownMenu>
              <HeaderDropwn.DropdownMenu title="Ferramentas" className="header-menu-item">
                <BhNavLink className="dropdown-item" to="#action/3.1">
                  Action
                </BhNavLink>
                <BhNavLink to="#action/3.2">Another action</BhNavLink>
                <BhNavLink to="#action/3.3">Something</BhNavLink>
                <BhNavLink to="#action/3.4">Separated link</BhNavLink>
              </HeaderDropwn.DropdownMenu>
            </HeaderNav>
          </HeaderNavCollapse>
        </HeaderNavBar>
      </HeaderBh>
    );
  }
}
