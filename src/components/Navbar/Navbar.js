import NavbarDesktop from './NavbarDesktop/NavbarDesktop';
import NavbarMobile from './NavbarMobile/NavbarMobile';
import Media from 'react-media';
import { Fragment } from 'react';

const Navbar = () => {
  return (
    <Media
      queries={{
        small: '(max-width: 52rem)',

        large: '(min-width: 1200px)',
      }}
    >
      {(matches) => (
        <Fragment>
          {matches.small ? <NavbarMobile /> : <NavbarDesktop />}
        </Fragment>
      )}
    </Media>
  );
};

export default Navbar;
