import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

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
    &.active {
      color: ${({ color }) => color};
    }

    @media (min-width: 63.5rem) {
      :hover::before,
      &.active::before {
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

const LinkComp = ({ path, color, name }) => {
  return (
    <StyledLink color={color}>
      <NavLink
        className={({ isActive }) => (isActive ? 'active' : '')}
        to={path}
      >
        {name}
      </NavLink>
    </StyledLink>
  );
};

export default LinkComp;
