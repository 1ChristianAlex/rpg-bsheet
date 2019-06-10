import React, { Component } from 'react';
import { TesteFlex, TesteGrid } from '../styledComponents/styledLinks';
import { Row, Col } from 'react-bootstrap';

export default class TestePage extends Component {
  render() {
    return (
      <>
        <TesteFlex.container>
          <TesteFlex.item>TesteFlex</TesteFlex.item>
          <TesteFlex.item>TesteFlex2</TesteFlex.item>
          <TesteFlex.item>TesteFlex2</TesteFlex.item>

          <TesteFlex.item>TesteFlex</TesteFlex.item>
          <TesteFlex.item>TesteFlex2</TesteFlex.item>
          <TesteFlex.item>TesteFlex2</TesteFlex.item>
        </TesteFlex.container>
        <Row>
          <Col md={6}>Col 6</Col>
          <Col md={6}>Col 6</Col>
        </Row>
        <Row>
          <Col md={3}>Col 3</Col>
          <Col md={3}>Col 3</Col>
          <Col md={3}>Col 3</Col>
          <Col md={3}>Col 3</Col>
          <Col md={3}>Col 3</Col>
          <Col md={3}>Col 3</Col>
        </Row>
        <TesteGrid.wraper>
          <TesteGrid.col>TesteGrid.col</TesteGrid.col>
          <TesteGrid.col>TesteGrid.col</TesteGrid.col>
          <TesteGrid.col>TesteGrid.col</TesteGrid.col>
          <TesteGrid.col>TesteGrid.col</TesteGrid.col>
        </TesteGrid.wraper>
      </>
    );
  }
}
