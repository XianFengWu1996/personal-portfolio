import { useState } from 'react';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    console.log('clicked');
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <header>
      <DesktopNav onOpen={handleOpen} />
      <MobileNav isOpen={open} onClose={handleClose} />
    </header>
  );
};

export default NavBar;
