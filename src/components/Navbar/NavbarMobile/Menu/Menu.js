import { StyledMenu, PlanetIcon } from './Menu.styled';

import data from '../../../../data.json';

const Menu = () => {
  return (
    <StyledMenu>
      {data.map((planet, index) => (
        <li key={index}>
          <PlanetIcon planetColor={planet.color} />
          <p>{planet.name}</p>
        </li>
      ))}
    </StyledMenu>
  );
};

export default Menu;
