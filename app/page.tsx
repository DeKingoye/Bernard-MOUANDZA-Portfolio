// 'use client'
// // import MainNav from '@/components/MainNav'
// import {motion} from 'framer-motion';
// import { TypeAnimation } from 'react-type-animation';
// import { MdArrowOutward } from 'react-icons/md';
// import { HiOutlinePhone, HiOutlineMail } from 'react-icons/hi';
// // components
// import Blob from '@/components/Blob';
// import Image from "next/image";
// import avatarImg from '@/public/assets/yannS.png' ; 
// import Socials from '@/components/Socials';
// import Pattern from '@/components/Pattern';

// const Home = () => {
//   return (
//      <motion.section
//      initial={{opacity:0}}
//      animate={{opacity:1, transition:{delay:2.4, duration:0.4, ease: "easeIn"},
//      }}
//     //  className='h-screen flex items-center'
//     className='flex items-center md:min-h-screen py-0 xl:py-0'
//     >
//       {/* pattern */}
//       <Pattern />
//       <div className='flex flex-col xl:flex-row items-center justify-between w-full px-5'>
//         {/* text */}
//         <div className='w-full xl:w-[550px] flex flex-col items-center xl:items-start text-center xl:text-left '>
//           <h1 className='h1 flex-1 mb-[28px]'>Bonjour, je suis Bernard<br/>
//           <TypeAnimation sequence={['Expert en transformation Digitale', 2000, 'Passionné par la data', 2000]} wrapper='span' speed={40} className='text-accent' repeat={Infinity} cursor={false}/>
//           </h1>
//           <p className='max-w-[500px] mb-[44px]'> je m'occupe de toute la chaine informatique depuis la création jusq'au déploiement, en passant par les tests</p>
//           <button className='btn btn-lg btn-accent mb-16'>
//             <div className='flex items-center gap-3'>
//               <span>parlons un peu</span>
//               <MdArrowOutward className="text-xl"/>
//             </div>
//           </button>
//           {/* contact info */}
//           <div className='flex flex-col xl:flex-row xl:items-center gap-4 xl:gap-8 mb-12 xl:mb-0'>
//             {/* phone */}
//             <div className='flex items-center gap-4 text-lg'>
//               <span className='text-accent'>
//                 <HiOutlinePhone className='text-xl'/>
//               </span>
//               <span>+33763443742</span>
//             </div>
//             {/* email */}
//             <div className='flex items-center gap-4 text-lg'>
//               <span className='text-accent'>
//                 <HiOutlineMail className='text-xl'/>
//               </span>
//               <span>yannmouandza3@gmail.com</span>
//             </div>
//           </div>
//           {/* Socials */}
//           <Socials containerStyles="flex 2xl:flex-col gap-6 xl:hidden 2xl:flex 2xl:absolute 2xl:top-1/2 2xl:right-2 2xl:transform 2xl:-translate-x-1/2 2xl:-translate-y-1/2" iconStyles="bg-accent text-white hover:bg-accent-hover transition w-[48px] h-[48px] text-[22px] flex items-center justify-center rounded-full cursor-pointer" />
//         </div>
//         {/* blob & image */}
//         <div className='hidden xl:block flex-1 relative z-20'>
//           {/* blob*/}
//           <Blob containerStyles="w-[560px] h-[560px]" />
//           {/* avatar img */}
//           <Image
//             src={avatarImg}
//             alt="Description of image"
//             width={240}
//             height={300}
//             quality={100}
//             className="absolute top-16 left-[120px]"
//           />
//           {/* overlay gradient */}
//           <div className='w-full h-[164px] absolute bottom-0 left-0 z-10 right-0 bg-gradient-to-t from-primary via-primary/90 to-primary/40'></div>

//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default Home

// ./app/page.jsx (ou ./components/Home.jsx selon ton arborescence)
'use client'

import Link from 'next/link';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { MdArrowOutward } from 'react-icons/md';
import { HiOutlinePhone, HiOutlineMail } from 'react-icons/hi';

// components
import Blob from '@/components/Blob';
import Image from 'next/image';
import avatarImg from '@/public/assets/yannS.png';
import Socials from '@/components/Socials';
import Pattern from '@/components/Pattern';

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="flex items-center md:min-h-screen py-0 xl:py-0"
    >
      {/* pattern */}
      <Pattern />

      <div className="flex flex-col xl:flex-row items-center justify-between w-full px-5">
        {/* text */}
        <div className="w-full xl:w-[550px] flex flex-col items-center xl:items-start text-center xl:text-left">
          <h1 className="h1 flex-1 mb-[28px]">
            Bonjour, je suis Bernard
            <br />
            <TypeAnimation
              sequence={[
                'Expert en transformation Digitale',
                2000,
                'Passionné par la data',
                2000,
              ]}
              wrapper="span"
              speed={40}
              className="text-accent"
              repeat={Infinity}
              cursor={false}
            />
          </h1>

          <p className="max-w-[500px] mb-[44px]">
            Entierement impliqué dans la transformation digitale des organisations, après des années passées chez afluens Group et chez ABC Agence Immobilière, j'ai gagné en maturité sur plusieurs sujets d'où le fait de vous proposer mes services
          </p>

          {/* CTA -> /about */}
          <Link
            href="/about"
            className="btn btn-lg btn-accent mb-16 inline-flex items-center gap-3"
          >
            <span>parlons un peu</span>
            <MdArrowOutward className="text-xl" />
          </Link>

          {/* contact info */}
          <div className="flex flex-col xl:flex-row xl:items-center gap-4 xl:gap-8 mb-12 xl:mb-0">
            {/* phone */}
            <div className="flex items-center gap-4 text-lg">
              <span className="text-accent">
                <HiOutlinePhone className="text-xl" />
              </span>
              <span>+33763443742</span>
            </div>

            {/* email */}
            <div className="flex items-center gap-4 text-lg">
              <span className="text-accent">
                <HiOutlineMail className="text-xl" />
              </span>
              <span>yannmouandza3@gmail.com</span>
            </div>
          </div>

          {/* Socials */}
          <Socials
            containerStyles="flex 2xl:flex-col gap-6 xl:hidden 2xl:flex 2xl:absolute 2xl:top-1/2 2xl:right-2 2xl:transform 2xl:-translate-x-1/2 2xl:-translate-y-1/2"
            iconStyles="bg-accent text-white hover:bg-accent-hover transition w-[48px] h-[48px] text-[22px] flex items-center justify-center rounded-full cursor-pointer"
          />
        </div>

        {/* blob & image */}
        <div className="hidden xl:block flex-1 relative z-20">
          {/* blob */}
          <Blob containerStyles="w-[560px] h-[560px]" />

          {/* avatar img */}
          <Image
            src={avatarImg}
            alt="Portrait de Bernard"
            width={240}
            height={300}
            quality={100}
            className="absolute top-16 left-[120px]"
            priority
          />

          {/* overlay gradient */}
          <div className="w-full h-[164px] absolute bottom-0 left-0 z-10 right-0 bg-gradient-to-t from-primary via-primary/90 to-primary/40" />
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
