import styled from 'styled-components';

export const StyledTabs = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 1.2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.grayDark};
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayDark};
  padding: 1.25rem 0.25rem;
`;

export const Button = styled.button`
  cursor: pointer;
  border: transparent;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.grayLight};
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  & .active {
  }
`;
