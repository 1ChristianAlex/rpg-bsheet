import styled from 'styled-components';
import colors from './default';

export const PostS = {
  section: styled.section`
    width: 100%;
    background-color: ${colors.bgColor};
  `,
  container: styled.div`
    width: 90%;
    margin: 0 auto;
    padding: 15px 0;
  `,
  imgContainer: styled.div`
    position: relative;
    width: 100%;
  `,
  img: styled.img`
    width: 100%;
  `,
  textTime: styled.span`
    position: absolute;
    font-size: 11pt;
    bottom: 0;
    right: 0;
    font-weight: 600;
    color: white;
    background: ${colors.bgColor};
    padding: 5px 10px;
  `,
  TextContainer: styled.div`
    width: 100%;
    text-align: left;
    margin: 5px;
  `,
  textTitle: styled.h1`
    font-size: 15pt;
    color: white;
  `,
  textSub: styled.h2`
    font-size: 10pt;
    color: white;
  `,
  article: styled.article`
    background-color: ${colors.thridColor};
    padding: 10px;
    margin: 10px;
  `
};
export const ButtonMorePost = {
  btnContainer: styled.div`
    width: 100%;
    text-align: center;
    margin: 30px 0;
  `
};
