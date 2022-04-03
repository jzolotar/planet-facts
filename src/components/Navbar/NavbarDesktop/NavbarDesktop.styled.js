import styled from 'styled-components';

export const StyledNavbarDesktop = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 62rem) and (min-width: 52rem) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 62.1rem) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0.2rem 1.5rem;
    border-bottom: 0.1px solid ${({ theme }) => theme.colors.grayDark};
  }

  h1 {
    color: white;
    font-size: 1.45rem;
    text-transform: uppercase;
    letter-spacing: 0.3rem;
    padding: 1rem 1rem 0 1rem;
    text-align: center;
    @media (max-width: 62rem) and (min-width: 52rem) {
      text-align: center;
    }

    @media (min-width: 62.1rem) {
      width: 100%;
      font-size: 1.5rem;
      padding: 0;
      text-align: left;
    }
  }
`;
