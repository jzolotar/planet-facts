import { StyledMenu } from './Menu.styled';
import data from '../../../data.json';
import LinkComp from './Link';

const Menu = () => {
  return (
    <StyledMenu>
      {data.map((planet, index) => (
        <LinkComp key={index} color={planet.color} name={planet.name} />
      ))}
    </StyledMenu>
  );
};

export default Menu;
