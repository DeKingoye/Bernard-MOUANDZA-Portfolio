'use client'
import {motion} from 'framer-motion';

//swiper
import {Swiper, SwiperSlide} from "swiper/react"; 
import {Pagination} from "swiper/modules"; 
import "swiper/css"; 
import "swiper/css/pagination";

// tabs
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"; 
import Link from "next/link"; 
import Image from "next/image"; 
import {MdArrowOutward} from "react-icons/md";
import {FaGhitub} from "react-icons"; 
import { div } from 'framer-motion/client';


// data
const project = [
  {
    id: 1, 
    category: "frontend", 
    title: "LaunchWave Landing Page",
    description: "React + Tailwind Landing page",
    image: "/assets/work/thumb1.png", 
    link: "",
    github: "",
    tech: ["React", "Tailwind CSS", "Framer Motion"]
  },

  {
    id: 2, 
    category: "frontend", 
    title: "Nextfolio Portfolio Site",
    description: "Next.js portfolio site",
    image: "/assets/work/thumb2.png", 
    link: "",
    github: "",
    tech: ["Next.js", "Tailwind CSS", "Shadcn UI"]
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
    image: "/assets/work/thumb1.png", 
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

const categories = ['frontend', 'fullstack', 'Uiux', 'branding']; 

const Work = () => {
  return (
    <motion.section
        initial={{opacity:0}}
         animate={{opacity:1, transition:{delay:2.4, duration:0.4, ease: "easeIn"},
         }}

         className='min-h-screen flex items-center py-24 xl:py-0'
        >
       <div className='container mx-auto w-full h-full flex flex-col justify-center'>
          {/* heading */}
          <h2 className='h2 mb-6 xl:mb-12 max-w-[600px]'>My Latest <span>Work</span>
          </h2>
          {/* tabs */}
          <Tabs defaultValue='frontend' className="w-full flex flex-col gap-6 xl:gap-12">
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
             <div>
               {categories.map((category) => {
                return (
                  <TabsContent key={category} value={category}>
                    <Swiper>
                      {project.filter((project) => project.category === category).map((project)=>{
                        return (
                          <div>
                            <SwiperSlide key={project.id} className="h-full">
                              <div className="flex flex-col xl:flex-row gap-8 xl:gap-12">
                                {/* project info */}
                                <div> 
                                  {/* title */}
                                  <h3 className="h3">{project.title}</h3>
                                  {/* tech */}
                                  <div>
                                    <p>Technologies Used</p>
                                  </div>
                                  <ul className="flex flex-wrap gap-4">
                                    {project.tech.map((item, index) => {
                                      return <li key={index} className="flex items-center gap-4 bg-[#a883ff]/13 h-[28px] px-[14px] rounded-full">{item}</li>
                                    })}
                                  </ul>
                                </div>
                              </div>
                            </SwiperSlide>
                          </div>
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