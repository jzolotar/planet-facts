import styled from 'styled-components';

export const StyledTabs = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 1.2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.grayDark};
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayDark};
  padding: 1.25rem 1.5rem;
  grid-area: tabs;
  width: 100%;

  @media (min-width: 52rem) {
    width: 100%;
    max-width: 285px;
    justify-self: flex-end;
    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  border: transparent;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  @media (min-width: 52rem) {
    width: 100%;
    padding: 1rem;
    text-align: left;
    border: 1px solid ${({ theme }) => theme.colors.grayDark};
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  & .active {
  }
`;
