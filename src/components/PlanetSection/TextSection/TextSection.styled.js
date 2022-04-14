import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledTextSection = styled(motion.article)`
  padding: 0.25rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  color: white;
  grid-area: text-section;

  @media (min-width: 52rem) {
    align-items: flex-start;
  }

  @media (min-width: 63.5rem) {
    align-self: end;
  }
  h1 {
    font-size: 2.5rem;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.white};
    margin-top: 1rem;

    @media (min-width: 63.5rem) {
      margin-top: unset;
      font-size: 60px;
      letter-spacing: 0.6rem;
    }
  }
  p {
    text-align: center;
    font-size: 0.9rem;
    line-height: 1.3rem;
    min-height: 7.8rem;
    color: ${({ theme }) => theme.colors.whiteAlpha50};
    @media (min-width: 52rem) {
      text-align: left;
    }
  }

  div {
    margin-top: 1rem;
    display: flex;
    gap: 0.3rem;
    font-size: 0.92rem;
    align-items: center;
    justify-content: center;
    span {
      color: ${({ theme }) => theme.colors.grayLight};
      letter-spacing: 0.2px;
    }
    a {
      position: relative;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.2rem;
      color: ${({ theme }) => theme.colors.grayLight};
      font-weight: 700;
      ::after {
        position: absolute;
        top: 1.1rem;
        left: 0;
        content: '';
        width: 100%;
        border-bottom: 1px solid ${({ theme }) => theme.colors.grayLight};
      }
    }
  }
`;
