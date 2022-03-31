import styled from 'styled-components';

export const StyledMenu = styled.nav`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 2rem;
  border: transparent;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayDark};
  width: 100%;
  padding: 1rem;

  @media (min-width: 52rem) {
    border: transparent;
  }

  /* a {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.whiteAlpha75};
    font-size: 1rem;
    border: transparent;

    :hover,
    .active {
      color: ${({ theme }) => theme.colors.white};

      @media (min-width: 52rem) {
      }
    }
  } */
`;
