//Ce qui marchait 28/09/2025

// import React from 'react'; 
// import NavLinks from './NavLinks';
// import { nav } from 'framer-motion/client';
// import Logo from './Logo';
// import { MdFileDownload } from 'react-icons/md';

// const MainNav = () => {
//   return (
//     <nav className='w-full pt-16'>
//         <div className='flex flex-col h-full items-center justify-between'>
//             <Logo />
//             <NavLinks containerStyles="flex flex-col gap-6"/>  
//             <button className='btn btn-lg btn-tertiary mb-16'>
//                 <div className='flex items-center gap-3'>
//                     <span>Télecharger mon CV</span>
//                     <MdFileDownload className="text-xl"/>
//                 </div>
//             </button>
//         </div>
           
//     </nav>
//   )
// }

// export default MainNav


'use client';
import React from 'react';
import NavLinks from './NavLinks';
import Logo from './Logo';
import { MdFileDownload } from 'react-icons/md';

const MainNav = () => {
  return (
    <nav className="w-full pt-16">
      <div className="flex flex-col h-full items-center justify-between">
        <Logo />
        <NavLinks containerStyles="flex flex-col gap-6" />

        {/* Lien de téléchargement stylé comme un bouton */}
        <a
          href="/api/cv"
          className="btn btn-lg btn-tertiary mb-16 inline-flex items-center gap-3"
          aria-label="Télécharger mon CV (PDF)"
        >
          <span>Télécharger mon CV</span>
          <MdFileDownload className="text-xl" />
        </a>

      </div>
    </nav>
  );
};

export default MainNav;
