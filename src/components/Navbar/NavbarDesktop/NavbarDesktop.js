import Menu from './Menu';
import { StyledNavbarDesktop } from './NavbarDesktop.styled';

const NavbarDesktop = () => {
  return (
    <StyledNavbarDesktop>
      <h1>The planets</h1>
      <Menu />
    </StyledNavbarDesktop>
  );
};

export default NavbarDesktop;
