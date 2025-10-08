// 'use client'
// import {motion} from 'framer-motion';

// //swiper
// import {Swiper, SwiperSlide} from "swiper/react"; 
// import {Pagination} from "swiper/modules"; 
// import "swiper/css"; 
// import "swiper/css/pagination";

// // tabs
// import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"; 
// import Link from "next/link"; 
// import Image from "next/image"; 
// import {MdArrowOutward} from "react-icons/md";
// import {FaGithub} from "react-icons/fa"; 


// // data
// const projects = [
//   {
//     id: 1, 
//     category: "frontend", 
//     title: "LaunchWave Landing Page",
//     description: "React + Tailwind Landing page",
//     image: "/assets/work/thumb1.png", 
//     link: "",
//     github: "",
//     tech: ["React", "Tailwind CSS", "Framer Motion"]
//   },

//   {
//     id: 2, 
//     category: "frontend", 
//     title: "Nextfolio Portfolio Site",
//     description: "Next.js portfolio site",
//     image: "/assets/work/thumb2.png", 
//     link: "",
//     github: "",
//     tech: ["Next.js", "Tailwind CSS", "Shadcn UI"]
//   },
//   {
//     id: 3, 
//     category: "fullstack", 
//     title: "AuthBoard Dashbboard",
//     description: "MERN App with Authentication",
//     image: "/assets/work/thumb3.png", 
//     link: "",
//     github: "",
//     tech: ["Mongo", "Express", "React", "Node.js"]
//   },
//   {
//     id: 4, 
//     category: "fullstack", 
//     title: "ChatSync Platform",
//     description: "Real-time MERN app Withj chat functionnality",
//     image: "/assets/work/thumb4.png", 
//     link: "",
//     github: "",
//     tech: ["MERN", "Socket.IO", "Redux"]
//   },

//   {
//     id: 5, 
//     category: "uiux", 
//     title: "FlowMobile App Design",
//     description: "Mobile-First Figma design",
//     image: "/assets/work/thumb5.png", 
//     link: "",
//     github: "",
//     tech: ["Figma", "Adobe XD"]
//   },

//   {
//     id: 6, 
//     category: "uiux", 
//     title: "ShopEase Dashboard Redesign",
//     description: "Redesign of e-commerce dashboard",
//     image: "/assets/work/thumb2.png", 
//     link: "",
//     github: "",
//     tech: ["Figma", "Framer", "Whimsical"]
//   },

//   {
//     id: 7, 
//     category: "branding", 
//     title: "Brewhaus Brand Identity",
//     description: "A bold and earthy visual identity for a modern coffee brand",
//     image: "/assets/work/thumb3.png", 
//     link: "",
//     github: "",
//     tech: ["Illustrator", "Photoshop", "Figma"]
//   },

//   {
//     id: 8, 
//     category: "branding", 
//     title: "LunasSkin Luxury Branding",
//     description: "Elegant branding for a premium skincare product line",
//     image: "/assets/work/thumb4.png", 
//     link: "",
//     github: "",
//     tech: ["Photoshop", "Figma", "Canva"]
//   },
//   {
//     id: 9, 
//     category: "branding", 
//     title: "NovaTach Brand Kit",
//     description: "Full branding kit for a tech startup including logo and brand book",
//     image: "/assets/work/thumb1.png", 
//     link: "",
//     github: "",
//     tech: ["Illustrator", "Figma", "Notion"]
//   },
 
// ]

// const categories = ['frontend', 'fullstack', 'uiux', 'branding']; 

// const Work = () => {
//   return (
//     <motion.section
//         initial={{opacity:0}}
//          animate={{opacity:1, transition:{delay:2.4, duration:0.4, ease: "easeIn"},
//          }}

//          className='min-h-screen flex items-center py-24 xl:py-0'
//         >
//        <div className='container mx-auto w-full h-full flex flex-col justify-center'>
//           {/* heading */}
//           <h2 className='h2 mb-6 xl:mb-12 max-w-[600px]'>Mes derniers <span>projets</span>
//           </h2>
//           {/* tabs */}
//           <Tabs defaultValue='frontend' className="w-full flex flex-col gap-6 xl:gap-12">
//              <TabsList className='flex flex-wrap justify-center items-center gap-4 h-full mb-4 xl:mb-0'>
//               {categories.map ((category)=>{
//                 return (
//                   <TabsTrigger key={category} value={category} className='capitalize border border-white/10 data-[state=active]:bg-accent data-[state=active]:border-accent h-[48px] px-6 rounded-full cursor-pointer'>
//                     {category === "uiux" ? "UI UX Design": category}
//                   </TabsTrigger>
//                 )
//               })}
//              </TabsList> 
//              {/* tabs content */}
//              <div className='h-[400px] scrollbar scrollbar-thumb-accent scrollbar-track-accent/5 overflow-y-scroll xl:overflow-y-visible'>
//                {categories.map((category) => {
//                 return (
//                   <TabsContent key={category} value={category}>
//                     <Swiper modules={[Pagination]} pagination={{clickable: true, dynamicBullets: true}} className='h-max xl:h-[460px]'>
//                       {projects.filter((project) => project.category === category).map((project)=>{
//                         return (
//                             <SwiperSlide key={project.id} className="h-full">
//                               <div className="flex flex-col xl:flex-row gap-8 xl:gap-12">
//                                 {/* project info */}
//                                 <div className='w-full max-w-[380px] flex flex-col gap-6 xl:gap-8 xl:pt-6 order-2 xl:order-none'> 
//                                   {/* title */}
//                                   <h3 className="h3">{project.title}</h3>
//                                   {/* tech */}
//                                   <div className='xl:mb-4 max-w-[300px] min-h-[130px]'>
//                                       <p className='mb-4'>Technologies Used</p>
//                                       <ul className="flex flex-wrap gap-4">
//                                         {project.tech.map((item, index) => {
//                                           return <li 
//                                           key={index}
//                                           className="flex items-center gap-4 bg-[#a883ff]/13 h-[28px] px-[14px] rounded-full">
//                                             {item}
//                                           </li>
//                                         })}
//                                       </ul>
//                                   </div>
//                                   {/* btns */}
//                                   <div className='flex flex-col sm:flex-row gap-4 items-start'>
//                                     <Link href={project.link}>
//                                         <button className='btn btn-sm btn-accent flex gap-2'>
//                                           <MdArrowOutward className='text-xl'/>
//                                           <span>Live Project</span>
//                                         </button>
//                                     </Link>

//                                     <Link href={project.github}>
//                                         <button className='btn btn-sm btn-white flex gap-2'>
//                                           <FaGithub className='text-xl'/>
//                                           <span>Github Repo</span>
//                                         </button>
//                                     </Link>
//                                   </div>
//                                 </div>
//                                 {/* project img */}
//                                 <div className='w-full h-[200px] md:h-[300px] xl:h-[400px] relative bg-pink-50/10 order-1 xl:order-none rounded-lg overflow-hidden'>
//                                 <Image
//                                     src={project.image}
//                                     alt={project.image}
//                                     fill
//                                     className="object-cover"
//                                 />
//                                 </div>
//                               </div>
//                             </SwiperSlide>
//                         )
//                       })}
//                     </Swiper>
//                   </TabsContent>
//                 )
//                })}
//              </div>
//           </Tabs> 
//        </div> 
//     </motion.section>
//   )
// }

// export default Work














// option scroll horizontal 

// 'use client'
// import {motion} from 'framer-motion';

// //swiper
// import {Swiper, SwiperSlide} from "swiper/react";
// import { Pagination, Scrollbar, Mousewheel } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";

// // tabs
// import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
// import Link from "next/link";
// import Image from "next/image";
// import {MdArrowOutward} from "react-icons/md";
// import {FaGithub} from "react-icons/fa";

// // data
// const projects = [
//   {
//     id: 1,
//     category: "frontend",
//     title: "LaunchWave Landing Page",
//     description: "React + Tailwind Landing page",
//     image: "/assets/work/thumb1.png",
//     link: "",
//     github: "",
//     tech: ["React", "Tailwind CSS", "Framer Motion"]
//   },

//   {
//     id: 2,
//     category: "frontend",
//     title: "Nextfolio Portfolio Site",
//     description: "Next.js portfolio site",
//     image: "/assets/work/thumb2.png",
//     link: "",
//     github: "",
//     tech: ["Next.js", "Tailwind CSS", "Shadcn UI"]
//   },
//   {
//     id: 3,
//     category: "fullstack",
//     title: "AuthBoard Dashbboard",
//     description: "MERN App with Authentication",
//     image: "/assets/work/thumb3.png",
//     link: "",
//     github: "",
//     tech: ["Mongo", "Express", "React", "Node.js"]
//   },
//   {
//     id: 4,
//     category: "fullstack",
//     title: "ChatSync Platform",
//     description: "Real-time MERN app Withj chat functionnality",
//     image: "/assets/work/thumb4.png",
//     link: "",
//     github: "",
//     tech: ["MERN", "Socket.IO", "Redux"]
//   },

//   {
//     id: 5,
//     category: "uiux",
//     title: "FlowMobile App Design",
//     description: "Mobile-First Figma design",
//     image: "/assets/work/thumb5.png",
//     link: "",
//     github: "",
//     tech: ["Figma", "Adobe XD"]
//   },

//   {
//     id: 6,
//     category: "uiux",
//     title: "ShopEase Dashboard Redesign",
//     description: "Redesign of e-commerce dashboard",
//     image: "/assets/work/thumb2.png",
//     link: "",
//     github: "",
//     tech: ["Figma", "Framer", "Whimsical"]
//   },

//   {
//     id: 7,
//     category: "branding",
//     title: "Brewhaus Brand Identity",
//     description: "A bold and earthy visual identity for a modern coffee brand",
//     image: "/assets/work/thumb3.png",
//     link: "",
//     github: "",
//     tech: ["Illustrator", "Photoshop", "Figma"]
//   },

//   {
//     id: 8,
//     category: "branding",
//     title: "LunasSkin Luxury Branding",
//     description: "Elegant branding for a premium skincare product line",
//     image: "/assets/work/thumb4.png",
//     link: "",
//     github: "",
//     tech: ["Photoshop", "Figma", "Canva"]
//   },
//   {
//     id: 9,
//     category: "branding",
//     title: "NovaTach Brand Kit",
//     description: "Full branding kit for a tech startup including logo and brand book",
//     image: "/assets/work/thumb1.png",
//     link: "",
//     github: "",
//     tech: ["Illustrator", "Figma", "Notion"]
//   },

// ]

// const categories = ['frontend', 'fullstack', 'uiux', 'branding'];

// const Work = () => {
//   return (
//     <motion.section
//       initial={{opacity:0}}
//       animate={{opacity:1, transition:{delay:2.4, duration:0.4, ease: "easeIn"},
//       }}
//       className='min-h-screen flex items-center py-24 xl:py-0'
//     >
//       <div className='container mx-auto w-full h-full flex flex-col justify-center'>
//         {/* heading */}
//         <h2 className='h2 mb-6 xl:mb-12 max-w-[600px]'>Mes derniers <span>projets</span>
//         </h2>
//         {/* tabs */}
//         <Tabs defaultValue='frontend' className="w-full flex flex-col gap-6 xl:gap-12">
//           <TabsList className='flex flex-wrap justify-center items-center gap-4 h-full mb-4 xl:mb-0'>
//             {categories.map ((category)=>{
//               return (
//                 <TabsTrigger key={category} value={category} className='capitalize border border-white/10 data-[state=active]:bg-accent data-[state=active]:border-accent h-[48px] px-6 rounded-full cursor-pointer'>
//                   {category === "uiux" ? "UI UX Design": category}
//                 </TabsTrigger>
//               )
//             })}
//           </TabsList>
//           {/* tabs content */}
//           <div className='h-[400px] scrollbar scrollbar-thumb-accent scrollbar-track-accent/5 overflow-y-scroll xl:overflow-y-visible'>
//             {categories.map((category) => {
//               return (
//                 <TabsContent key={category} value={category}>
//                   <Swiper
//                     modules={[Pagination, Scrollbar, Mousewheel]}
//                     pagination={{clickable: true, dynamicBullets: true}}
//                     scrollbar={{ draggable: true, hide: false }}
//                     mousewheel={{ forceToAxis: true }}
//                     className='h-max xl:h-[460px] !pb-8'
//                   >
//                     {projects.filter((project) => project.category === category).map((project)=>{
//                       return (
//                         <SwiperSlide key={project.id} className="h-full">
//                           <div className="flex flex-col xl:flex-row gap-8 xl:gap-12">
//                             {/* project info */}
//                             <div className='w-full max-w-[380px] flex flex-col gap-6 xl:gap-8 xl:pt-6 order-2 xl:order-none'>
//                               {/* title */}
//                               <h3 className="h3">{project.title}</h3>
//                               {/* tech */}
//                               <div className='xl:mb-4 max-w-[300px] min-h-[130px]'>
//                                 <p className='mb-4'>Technologies Used</p>
//                                 <ul className="flex flex-wrap gap-4">
//                                   {project.tech.map((item, index) => {
//                                     return <li
//                                       key={index}
//                                       className="flex items-center gap-4 bg-[#a883ff]/13 h-[28px] px-[14px] rounded-full">
//                                       {item}
//                                     </li>
//                                   })}
//                                 </ul>
//                               </div>
//                               {/* btns */}
//                               <div className='flex flex-col sm:flex-row gap-4 items-start'>
//                                 <Link href={project.link}>
//                                   <button className='btn btn-sm btn-accent flex gap-2'>
//                                     <MdArrowOutward className='text-xl'/>
//                                     <span>Live Project</span>
//                                   </button>
//                                 </Link>

//                                 <Link href={project.github}>
//                                   <button className='btn btn-sm btn-white flex gap-2'>
//                                     <FaGithub className='text-xl'/>
//                                     <span>Github Repo</span>
//                                   </button>
//                                 </Link>
//                               </div>
//                             </div>
//                             {/* project img */}
//                             <div className='w-full h-[200px] md:h-[300px] xl:h-[400px] relative bg-pink-50/10 order-1 xl:order-none rounded-lg overflow-hidden'>
//                               <Image
//                                 src={project.image}
//                                 alt={project.image}
//                                 fill
//                                 className="object-cover"
//                               />
//                             </div>
//                           </div>
//                         </SwiperSlide>
//                       )
//                     })}
//                   </Swiper>
//                 </TabsContent>
//               )
//             })}
//           </div>
//         </Tabs>
//       </div>
//     </motion.section>
//   )
// }

// export default Work



'use client'
import {motion} from 'framer-motion';

//swiper
import {Swiper, SwiperSlide} from "swiper/react";
import { Pagination, Scrollbar, Mousewheel, Navigation } from "swiper/modules"; // + Navigation
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/navigation"; // + style des flèches

// tabs
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import Link from "next/link";
import Image from "next/image";
import {MdArrowOutward} from "react-icons/md";
import {FaGithub} from "react-icons/fa";

// data
const projects = [
  {
    id: 1,
    category: "data",
    title: "Projet visant à classer les employés selon leurs performances de vente",
    description: "Réalisation d’un projet complet intégrant Power BI, Power Apps, Power Automate et Dataverse.",
    image: "/assets/work/DataverseYann_page.jpg",
    link: "",
    github: "",
    tech: ["Power BI", "Power Apps", "Power Automate", "Dataverse"]
  },

  {
    id: 2,
    category: "data",
    category: "data",
    title: "Projet illustrant le suivi des ventes à l’aide de KPI.",
    description: "Projet suivi de vente avec PowerBi et PowerBi Ser",
    image: "/assets/work/Suivi_de_ventes_page.jpg",
    link: "",
    github: "",
    tech: ["Sharepoint","PowerBi", "Power Bi Services", "Power Apps"]
  },
  {
    id: 3,
    category: "fullstack",
    title: "AuthBoard Dashbboard",
    description: "MERN App with Authentication",
    image: "/assets/work/thumb3.png",
    link: "",
    github: "",
    tech: ["Mongo", "Express", "React", "Node.js"]
  },
  {
    id: 4,
    category: "fullstack",
    title: "ChatSync Platform",
    description: "Real-time MERN app Withj chat functionnality",
    image: "/assets/work/thumb4.png",
    link: "",
    github: "",
    tech: ["MERN", "Socket.IO", "Redux"]
  },

  {
    id: 5,
    category: "uiux",
    title: "FlowMobile App Design",
    description: "Mobile-First Figma design",
    image: "/assets/work/thumb5.png",
    link: "",
    github: "",
    tech: ["Figma", "Adobe XD"]
  },

  {
    id: 6,
    category: "uiux",
    title: "ShopEase Dashboard Redesign",
    description: "Redesign of e-commerce dashboard",
    image: "/assets/work/thumb2.png",
    link: "",
    github: "",
    tech: ["Figma", "Framer", "Whimsical"]
  },

  {
    id: 7,
    category: "branding",
    title: "Brewhaus Brand Identity",
    description: "A bold and earthy visual identity for a modern coffee brand",
    image: "/assets/work/thumb3.png",
    link: "",
    github: "",
    tech: ["Illustrator", "Photoshop", "Figma"]
  },

  {
    id: 8,
    category: "branding",
    title: "LunasSkin Luxury Branding",
    description: "Elegant branding for a premium skincare product line",
    image: "/assets/work/thumb4.png",
    link: "",
    github: "",
    tech: ["Photoshop", "Figma", "Canva"]
  },
  {
    id: 9,
    category: "branding",
    title: "NovaTach Brand Kit",
    description: "Full branding kit for a tech startup including logo and brand book",
    image: "/assets/work/thumb1.png",
    link: "",
    github: "",
    tech: ["Illustrator", "Figma", "Notion"]
  },

]

const categories = ['data', 'fullstack', 'uiux', 'branding'];

const Work = () => {
  return (
    <motion.section
      initial={{opacity:0}}
      animate={{opacity:1, transition:{delay:2.4, duration:0.4, ease: "easeIn"},
      }}
      // className='min-h-screen flex items-center py-24 xl:py-0'
      className='flex items-center md:min-h-screen py-10 xl:py-0'
    >
      <div className='container mx-auto w-full h-full flex flex-col justify-center'>
        {/* heading */}
        <h2 className='h2 mb-6 xl:mb-12 max-w-[600px]'>Mes derniers <span>projets</span>
        </h2>
        {/* tabs */}
        <Tabs defaultValue='data' className="w-full flex flex-col gap-6 xl:gap-12">
          <TabsList className='flex flex-wrap justify-center items-center gap-4 h-full mb-4 xl:mb-0'>
            {categories.map ((category)=>{
              return (
                <TabsTrigger key={category} value={category} className='capitalize border border-white/10 data-[state=active]:bg-accent data-[state=active]:border-accent h-[48px] px-6 rounded-full cursor-pointer'>
                  {category === "uiux" ? "UI UX Design": category}
                </TabsTrigger>
              )
            })}
          </TabsList>
          {/* tabs content */}
          <div className='h-[400px] scrollbar scrollbar-thumb-accent scrollbar-track-accent/5 overflow-y-scroll xl:overflow-y-visible'>
            {categories.map((category) => {
              return (
                <TabsContent key={category} value={category}>
                  <Swiper
                    modules={[Pagination, Scrollbar, Mousewheel, Navigation]}  // + Navigation
                    pagination={{clickable: true, dynamicBullets: true}}
                    scrollbar={{ draggable: true, hide: false }}
                    mousewheel={{ forceToAxis: true }}
                    navigation                                           // 👈 active les flèches
                    className='h-max xl:h-[460px] !pb-8'
                  >
                    {projects.filter((project) => project.category === category).map((project)=>{
                      return (
                        <SwiperSlide key={project.id} className="h-full">
                          <div className="flex flex-col xl:flex-row gap-8 xl:gap-12">
                            {/* project info */}
                            <div className='w-full max-w-[380px] flex flex-col gap-6 xl:gap-8 xl:pt-1 order-2 xl:order-none'>
                              {/* title */}
                              <h3 className="h3">{project.title}</h3>
                              {/* tech */}
                              <div className='xl:mb-4 max-w-[300px] min-h-[130px]'>
                                <p className='mb-4'>Technologies Utilisées</p>
                                <ul className="flex flex-wrap gap-4">
                                  {project.tech.map((item, index) => {
                                    return <li
                                      key={index}
                                      className="flex items-center gap-4 bg-[#a883ff]/13 h-[28px] px-[14px] rounded-full">
                                      {item}
                                    </li>
                                  })}
                                </ul>
                              </div>
                              {/* btns */}
                              <div className='flex flex-col sm:flex-row gap-4 items-start'>
                                <Link href={project.link}>
                                  <button className='btn btn-sm btn-accent flex gap-2'>
                                    <MdArrowOutward className='text-xl'/>
                                    <span>Live Project</span>
                                  </button>
                                </Link>

                                <Link href={project.github}>
                                  <button className='btn btn-sm btn-white flex gap-2'>
                                    <FaGithub className='text-xl'/>
                                    <span>Github Repo</span>
                                  </button>
                                </Link>
                              </div>
                            </div>
                            {/* project img */}
                            <div className='w-full h-[200px] md:h-[300px] xl:h-[400px] relative bg-pink-50/10 order-1 xl:order-none rounded-lg overflow-hidden'>
                              <Image
                                src={project.image}
                                alt={project.image}
                                fill
                                className="object-cover"
                              />
                            </div>
                          </div>
                        </SwiperSlide>
                      )
                    })}
                  </Swiper>
                </TabsContent>
              )
            })}
          </div>
        </Tabs>
      </div>
    </motion.section>
  )
}

export default Work
