import { StyledMenu, PlanetIcon, ModalOverlay } from './Menu.styled';
import { NavLink } from 'react-router-dom';

import data from '../../../../data.json';
import { Fragment } from 'react';

const Menu = ({ isOpen }) => {
  return (
    <Fragment>
      <StyledMenu isOpen={isOpen}>
        {data.map((planet, index) => (
          <NavLink to='' key={index}>
            <PlanetIcon planetColor={planet.color} />
            <p>{planet.name}</p>
          </NavLink>
        ))}
      </StyledMenu>
    </Fragment>
  );
};

export default Menu;
