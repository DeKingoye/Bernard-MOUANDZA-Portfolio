import React from 'react'; 
import Link from 'next/link';

const links = [
  { name: 'Home', path: '/' },
  { name: 'about', path: '/about' },
  { name: 'services', path: '/services' },
  { name: 'works', path: '/works' },
  { name: 'contact', path: '/contact' },
];

const NavLinks = ({containerStyles}) => {
  return(
    <ul className={containerStyles}>{links.map((link, index)=> {
        return (
            <Link href={link.path} key={index}>
                {link.name}
            </Link>
    )})}
    </ul>)
}

export default NavLinks