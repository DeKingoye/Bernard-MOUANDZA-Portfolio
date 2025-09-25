import React from 'react'; 
import NavLinks from './NavLinks';
import { nav } from 'framer-motion/client';

const MainNav = () => {
  return (
    <nav>
        <NavLinks containerStyles="flex flex-col gap-6"/>     
    </nav>
  )
}

export default MainNav