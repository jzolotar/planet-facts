import { useState } from 'react';
import Burger from './Burger/Burger';
import Menu from './Menu/Menu';
import { NavbarMobileOverlay, StyledNavbarMobile } from './NavbarMobile.styled';

const NavbarMobile = () => {
  const [open, setOpen] = useState(false);
  const onClickHandler = () => {
    setOpen(!open);
  };

  return (
    <StyledNavbarMobile>
      {/* {open && <NavbarMobileOverlay />} */}
      <NavbarMobileOverlay isOpen={open} />
      <nav>
        <h1>The Plantes</h1>
        <Burger onClickHandler={onClickHandler} open={open} />

        <Menu isOpen={open} />
      </nav>
    </StyledNavbarMobile>
  );
};
export default NavbarMobile;
