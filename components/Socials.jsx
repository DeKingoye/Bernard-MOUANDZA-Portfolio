// "use client";
// import { BiLogoFacebook, BiLogoInstagram, BiLogoDribbble, BiLogoLinkedin } from "react-icons/bi"; 

// const socials = [
//     {icon: <BiLogoFacebook/>, path: ""},
//     {icon: <BiLogoInstagram/>, path: ""},
//     {icon: <BiLogoDribbble/>, path: ""},
//     {icon: <BiLogoLinkedin/>, path: ""}
// ]

// const Socials = ({containerStyles, iconStyles}) => {
//   return 
//     <div className={containerStyles}>{Socials.map((icon,index )=>{ return (
//         <div key={index} className={iconStyles}>{item.icon}</div>)})} 
//     </div>
// };

// export default Socials



// "use client";
// import { BiLogoFacebook, BiLogoInstagram, BiLogoDribbble, BiLogoLinkedin } from "react-icons/bi";

// const socials = [
//   { icon: <BiLogoFacebook />, path: "" },
//   { icon: <BiLogoInstagram />, path: "" },
//   { icon: <BiLogoDribbble />, path: "" },
//   { icon: <BiLogoLinkedin />, path: "" },
// ];

// const Socials = ({ containerStyles, iconStyles }) => {
//   return (
//     <div className={containerStyles}>
//       {socials.map((item, index) => (
//         <div key={index} className={iconStyles}>
//           {item.icon}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Socials;


"use client";

import Link from "next/link";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoDribbble,
  BiLogoLinkedin,
} from "react-icons/bi";

// 👉 Remplace par ton vrai profil LinkedIn :
const LINKEDIN_URL = "https://www.linkedin.com/in/bernard-mouandza-74aa67177/";

const socials = [
  // { icon: BiLogoFacebook, label: "Facebook", href: "" },
  // { icon: BiLogoInstagram, label: "Instagram", href: "" },
  // { icon: BiLogoDribbble, label: "Dribbble", href: "" },
  { icon: BiLogoLinkedin, label: "LinkedIn", href: LINKEDIN_URL },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map(({ icon: Icon, href, label }, index) => {
        // Pas de lien si pas d'URL
        if (!href) {
          return (
            <div key={index} className={iconStyles} aria-label={label} title={label}>
              <Icon />
            </div>
          );
        }

        // Lien interne vs externe
        const isExternal = /^https?:\/\//i.test(href);

        return isExternal ? (
          <a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={iconStyles}
            aria-label={label}
            title={label}
          >
            <Icon />
          </a>
        ) : (
          <Link
            key={index}
            href={href}
            className={iconStyles}
            aria-label={label}
            title={label}
          >
            <Icon />
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
