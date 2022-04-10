import styled from 'styled-components';
import logo from '../../../assets/images/planet-earth.svg';

const logoImg = (overviewImg) => overviewImg;

export const ImgStyled = styled.div`
  padding: 2rem 1.5rem;
  grid-area: img;
  position: relative;

  ::after {
    position: absolute;
    top: 0;
    left: 0;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    content: '';
    background-image: url(${({ geo }) => geo});
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    width: 100px;
    height: 120px;
    margin: 0;
    padding: 0;
  }

  @media (min-width: 63.5rem) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div {
    position: relative;
    margin: 0 auto;
    width: 150px;
    height: 150px;
    background-image: url(${({ currentImage }) => currentImage});

    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;

    @media (min-width: 52rem) {
      margin: 2rem auto;
      height: 245px;
      width: 245px;
    }

    @media (min-width: 63.5rem) {
      height: 340px;
      width: 340px;
    }
  }
`;
