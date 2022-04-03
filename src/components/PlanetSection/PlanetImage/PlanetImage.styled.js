import styled from 'styled-components';
import logo from '../../../assets/images/planet-earth.svg';

export const ImgStyled = styled.div`
  padding: 2rem 1.5rem;
  grid-area: img;
  div {
    margin: 0 auto;
    width: 150px;
    height: 150px;
    background-image: url(${logo});
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;

    @media (min-width: 52rem) {
      margin: 2rem auto;
      height: 245px;
      width: 245px;
    }
  }
`;
