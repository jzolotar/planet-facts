import styled from 'styled-components';
import { motion } from 'framer-motion';
export const StyledTabs = styled(motion.div)`
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
    button:nth-child(1)::after {
      position: absolute;
      content: '01';
      top: 50%;
      left: 1rem;
      transform: translateY(-50%);
      letter-spacing: 0.5px;
      color: ${({ theme }) => theme.colors.grayLight};
      font-weight: 700;
      font-size: 0.9rem;
    }

    button:nth-child(2)::after {
      position: absolute;
      content: '02';
      top: 50%;
      left: 1rem;
      transform: translateY(-50%);
      letter-spacing: 0.5px;
      color: ${({ theme }) => theme.colors.grayLight};
      font-size: 0.9rem;
    }
    button:nth-child(3)::after {
      position: absolute;
      content: '03';
      top: 50%;
      left: 1rem;
      transform: translateY(-50%);
      letter-spacing: 0.5px;
      color: ${({ theme }) => theme.colors.grayLight};
      font-size: 0.9rem;
    }
  }

  @media (min-width: 63.5rem) {
    align-self: start;
    max-width: unset;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  position: relative;
  border: transparent;
  background-color: transparent;
  color: white;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: ease-in 0.3s;

  &.active {
    transition: unset;
    color: ${({ color }) => color};
  }

  @media (min-width: 52rem) {
    width: 100%;
    padding: 1rem;
    padding-left: 2.5rem;
    text-align: left;
    border: 1px solid ${({ theme }) => theme.colors.grayDark};

    :hover {
      background-color: ${({ theme }) => theme.colors.grayDark};
    }

    &.active {
      transition: unset;
      background-color: ${({ color }) => color};
      color: unset;
    }
  }
`;
