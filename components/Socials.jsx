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


"use client";
import { BiLogoFacebook, BiLogoInstagram, BiLogoDribbble, BiLogoLinkedin } from "react-icons/bi";

const socials = [
  { icon: <BiLogoFacebook />, path: "" },
  { icon: <BiLogoInstagram />, path: "" },
  { icon: <BiLogoDribbble />, path: "" },
  { icon: <BiLogoLinkedin />, path: "" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <div key={index} className={iconStyles}>
          {item.icon}
        </div>
      ))}
    </div>
  );
};

export default Socials;
