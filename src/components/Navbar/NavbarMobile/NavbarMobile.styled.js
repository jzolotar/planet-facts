import styled from 'styled-components';

export const StyledNavbarMobile = styled.header`
  padding: 1rem 1.5rem;
  position: relative;

  nav {
    position: relative;
    display: flex;
    align-items: center;
    z-index: 1010;
    h1 {
      color: white;
      font-size: 1.45rem;
      text-transform: uppercase;
      z-index: 1010;
    }
  }
`;

export const NavbarMobileOverlay = styled.div`
  position: absolute;
  top: 4rem;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.black};
  z-index: 1005;
  transition: 0.5s ease-in;
  transform: ${({ isOpen }) =>
    isOpen ? 'translateX(0)' : 'translateX(-125%)'};
`;
