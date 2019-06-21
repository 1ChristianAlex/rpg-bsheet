import styled from 'styled-components';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import colors, { LinkContent } from '../../styledComponents/default';
import mind from '../../assets/imagens/stones/mind-stone.png';
import power from '../../assets/imagens/stones/power-stone.png';
import reality from '../../assets/imagens/stones/reality-stone.png';

const stonesStyle = {
  fluid: styled.div`
    width: 90%;
    margin: 0 auto;
  `,

  container: styled.div`
    width: 100%;
    display: flex;
    border: 1px solid ${colors.logoColor};
  `,
  text: styled.h3`
    font-size: 16pt;
    font-family: 'Permanent Marker', cursive;
    color: ${colors.logoColor};
    margin: 12% 0;
    text-align: center;
  `,
  stone: styled.img`
    width: 65%;
    position: relative;
    right: 30px;
    top: 0;
  `,
  item: styled.div`
    flex: 3;
  `,
  itemImg: styled.div`
    flex: 1;
    position: relative;
  `,
  section: styled.section`
    background-color: ${colors.bgColor};
    width: 100%;
  `
};

export const Stones = () => {
  let imagens = [{ img: mind, name: 'Arquivos' }, { img: power, name: 'Crie um personagem' }, { img: reality, name: 'Historia' }];
  console.log(imagens);
  return (
    <stonesStyle.section>
      <stonesStyle.fluid>
        <Row>
          {imagens.map((item, i) => {
            return (
              <Col md={4} key={i}>
                <LinkContent to={'#'}>
                  <stonesStyle.container>
                    <stonesStyle.item>
                      <stonesStyle.text>{item.name}</stonesStyle.text>
                    </stonesStyle.item>
                    <stonesStyle.itemImg>
                      <stonesStyle.stone src={item.img} />
                    </stonesStyle.itemImg>
                  </stonesStyle.container>
                </LinkContent>
              </Col>
            );
          })}
        </Row>
      </stonesStyle.fluid>
    </stonesStyle.section>
  );
};
