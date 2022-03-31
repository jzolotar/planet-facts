import { useState } from 'react';
import Burger from './Burger/Burger';
import Menu from './Menu/Menu';
import { StyledNavbarMobile } from './NavbarMobile.styled';

const NavbarMobile = () => {
  const [open, setOpen] = useState(false);
  const onClickHandler = () => {
    setOpen(!open);
  };

  return (
    <StyledNavbarMobile>
      <nav>
        <h1>The Plantes</h1>
        <Burger onClickHandler={onClickHandler} open={open} />
        <Menu isOpen={open} />
      </nav>
    </StyledNavbarMobile>
  );
};
export default NavbarMobile;
