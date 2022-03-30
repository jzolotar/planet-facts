import styled from 'styled-components';

export const PlanetIcon = styled.div`
  width: 0.95rem;
  height: 0.95rem;
  background-color: ${(props) => props.planetColor || 'blue'};
  border-radius: 100px;
`;

export const StyledMenu = styled.ul`
  position: absolute;
  height: 100%;
  top: 4.2rem;
  left: 0;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  li {
    display: flex;
    align-items: center;
    gap: 1rem;
    /* div {
      width: 0.95rem;
      height: 0.95rem;
      color: red;
      background-color: ${({ color }) => color};
      border-radius: 100px;
    } */
    p {
      text-transform: uppercase;
      font-size: 1.2rem;
    }
  }
`;
