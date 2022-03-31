import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import data from '../../../data.json';

export const StyledLink = styled.li`
  list-style: none;

  a {
    position: relative;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.whiteAlpha75};
    font-size: 1rem;
    border: transparent;
    transition: color 0.2s ease-in-out;

    :hover,
    .active {
      color: ${({ color }) => color};
    }

    @media (min-width: 52rem) {
      :hover::before,
      .active {
        content: '';
        position: absolute;
        width: 100%;
        height: 4px;
        top: -20px;
        background-color: ${({ color }) => color};
      }
    }
  }
`;

const LinkComp = ({ color, name }) => {
  return (
    <StyledLink color={color}>
      <NavLink to=''>{name}</NavLink>
    </StyledLink>
  );
};

export default LinkComp;
