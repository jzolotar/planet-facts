import { StyledMenu, PlanetIcon } from './Menu.styled';
import { NavLink } from 'react-router-dom';

import data from '../../../../data.json';

const Menu = ({ isOpen }) => {
  return (
    <StyledMenu isOpen={isOpen}>
      {data.map((planet, index) => (
        <NavLink to='' key={index}>
          <PlanetIcon planetColor={planet.color} />
          <p>{planet.name}</p>
        </NavLink>
      ))}
    </StyledMenu>
  );
};

export default Menu;
