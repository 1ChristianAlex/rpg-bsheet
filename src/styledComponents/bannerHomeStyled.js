import styled from 'styled-components';
import { ResponsiveEmbed } from 'react-bootstrap';
import bannerHome from '../assets/imagens/banners/bannerHome.jpg';
export const Banner = {
  section: styled.section`
    width: 100%;
    background-image: url(${bannerHome});
    background-repeat: no-repeat;
    background-size: cover;
  `,
  container: styled.div`
    display: flex;
    flex-flow: row;
    position: relative;
    width: 90%;
    margin: 0 auto;
    @media (max-width: 991px) {
      flex-flow: column;
    }
  `,
  item: styled.div`
    flex: 1;
    margin: 15px;
    position: relative;
  `,
  embed: styled(ResponsiveEmbed)`
    height: 330px;
  `,
  textContent: styled.div`
    position: absolute;
    bottom: 0;
    @media (max-width: 991px) {
      position: relative;
    }
  `,
  h1: styled.h1`
    color: white;
    font-size: 25pt;
    margin: 15px 0;
  `,
  p: styled.p`
    color: white;
    font-size: 12pt;
  `
};
