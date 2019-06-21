import styled from 'styled-components';
import { Link } from 'react-router-dom';

const colors = {
  logoColor: ' #f9dd3c',
  bgColor: ' #0d1321',
  thridColor: ' #192540',
  bgSoft: '#2f3135'
};
export default colors;

export const BLink = {
  link: styled(Link)`
    background-color: ${colors.logoColor};
  `
};
export const OnlyText = styled(Link)`
  padding: 5px 10px;
  background-color: ${colors.logoColor};
  color: ${colors.bgColor};
`;
export const LinkContent = styled(Link)``;
