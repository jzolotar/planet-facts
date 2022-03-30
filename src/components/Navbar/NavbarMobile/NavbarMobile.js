import Burger from './Burger/Burger';
import Menu from './Menu/Menu';
import { StyledNavbarMobile } from './NavbarMobile.styled';

const NavbarMobile = () => {
  return (
    <StyledNavbarMobile>
      <nav>
        <h1>The Plantes</h1>
        <Burger />
        <Menu />
      </nav>
    </StyledNavbarMobile>
  );
};
export default NavbarMobile;
