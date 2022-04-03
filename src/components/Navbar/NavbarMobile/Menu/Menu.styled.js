import styled from 'styled-components';

export const PlanetIcon = styled.div`
  width: 1.1rem;
  height: 1.1rem;
  background-color: ${(props) => props.planetColor || 'blue'};
  border-radius: 100px;
  z-index: 1010;
`;

export const StyledMenu = styled.ul`
  z-index: 1010;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 4.2rem;
  left: 0;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  transition: 0.5s ease-in;
  transform: ${({ isOpen }) =>
    isOpen ? 'translateX(0)' : 'translateX(-125%)'};
  z-index: 1010;

  a {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0 0 0.7rem 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.grayLight};

    p {
      text-transform: uppercase;
      font-size: 1.2rem;
      font-weight: 700;
      letter-spacing: 0.15rem;
      color: white;
    }
  }
`;
