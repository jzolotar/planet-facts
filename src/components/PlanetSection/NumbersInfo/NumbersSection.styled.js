import styled from 'styled-components';

export const StyledNumberSection = styled.ul`
  padding: 0 1.5rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  grid-area: numbers-section;

  @media (min-width: 52rem) {
    flex-direction: row;
  }

  li {
    padding: 1rem 0.75rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #333;
    @media (min-width: 52rem) {
      flex-direction: column;
      align-items: flex-start;
    }
    p {
      font-size: 0.92rem;
      color: ${({ theme }) => theme.colors.grayLight};
    }
    h1 {
      font-size: 1.1rem;
      @media (min-width: 63.5rem) {
        font-size: 2rem;
      }
    }
  }
`;
