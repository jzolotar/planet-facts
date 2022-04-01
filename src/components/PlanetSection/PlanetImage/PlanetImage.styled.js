import styled from 'styled-components';
import logo from '../../../assets/images/planet-earth.svg';

export const ImgStyled = styled.div`
  padding: 2rem 1rem;
  div {
    margin: 0 auto;
    width: 150px;
    height: 150px;
    background-image: url(${logo});
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
  }
`;
