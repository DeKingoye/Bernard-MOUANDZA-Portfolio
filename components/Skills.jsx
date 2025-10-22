// import {RiReactjsFill, RiNextjsFill, RiHtml5Fill, RiCss3Fill, RiTailwindCssFill, RiNodejsFill} from 'react-icons/ri';

// import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from '@/components/ui/tooltip';  

// const skills = [
//     {
//         icon: <RiReactjsFill />, 
//         name: "React.js"
//     }, 
//     {
//         icon: <RiNextjsFill />, 
//         name: "Next.js"
//     },
//     {
//         icon: <RiHtml5Fill />, 
//         name: "HTML5"
//     },
//     {
//         icon: <RiCss3Fill />, 
//         name: "CSS 3"
//     },
//     {
//         icon: <RiTailwindCssFill />, 
//         name: "Tailwind CSS"
//     }, 
//     {
//         icon: <RiNodejsFill />, 
//         name: "Tailwind CSS"
//     }

// ]

// const Skills = () => {
//   return <div>
//     <h2 className='h2 mb-8'>My <span className='text-accent'>Skills</span></h2>
//     <div className='flex flex-wrap gap-6 max-w-sm xl:max-w-none'>
//         {skills.map((item, index)=>{
//             return <TooltipProvider key={index}>
//                 <Tooltip>
//                     <TooltipTrigger className='w-16 h-1/6 rounded-full flex items-center justify-center bg-tertiary/70 group'>
//                         <div className='text-3xl group-hover:text-accent transition-all duration-300'>{item.icon}</div>
//                     </TooltipTrigger>
//                     <TooltipContent>
//                         <p className='text-lg'>{item.name}</p>
//                     </TooltipContent> 
//                 </Tooltip>
//             </TooltipProvider>
//         })}
//     </div>
//   </div>
// }

// export default Skills

// ./components/Skills.jsx
import {
  SiPowerbi,
  SiPython,
  SiJavascript,
  SiNextdotjs,
  SiGooglecloud,
  SiKubernetes,
  SiGithubactions,
} from 'react-icons/si';

import {
  Cloud,      // Azure (fallback)
  Share2,     // SharePoint (fallback)
  Workflow,   // Power Automate (fallback)
  AppWindow,  // Power Apps (fallback)
  Database,   // Dataverse
  Bot,        // AI Builder
  Cpu,        // Compute Engine
  Package,    // Artifact Registry
  Square,     // Fallback icon if something missing
} from 'lucide-react';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

// On stocke des composants (pas des éléments) pour éviter de rendre `undefined`
const skills = [
  // Microsoft Power Platform & 365
  { icon: SiPowerbi,  name: 'Power BI' },
  { icon: AppWindow,  name: 'Power Apps' },      // fallback
  { icon: Workflow,   name: 'Power Automate' },  // fallback
  { icon: Share2,     name: 'SharePoint' },      // fallback
  { icon: Database,   name: 'Dataverse' },
  { icon: Bot,        name: 'AI Builder' },

  // Cloud & Dev
  { icon: Cloud,         name: 'Azure' },           // fallback
  { icon: SiPython,      name: 'Python' },
  { icon: SiJavascript,  name: 'JavaScript' },
  { icon: SiNextdotjs,   name: 'Next.js' },
  { icon: SiGooglecloud, name: 'GCP' },
  { icon: Cpu,           name: 'Compute Engine' },
  { icon: Package,       name: 'Artifact Registry' },
  { icon: SiKubernetes,  name: 'Kubernetes' },
  { icon: SiGithubactions, name: 'GitHub Actions' },
];

const Skills = () => {
  return (
    <div>
      <h2 className="h2 mb-8">
        Mes <span className="text-accent">Competences</span>
      </h2>

      <TooltipProvider>
        <div className="flex flex-wrap gap-6 max-w-sm xl:max-w-none" role="list">
          {skills.map((item, index) => {
            const Icon = item.icon || Square; // fallback si jamais une icône manquait
            return (
              <Tooltip key={index}>
                <TooltipTrigger
                  className="w-16 h-16 rounded-full flex items-center justify-center bg-tertiary/70 group focus:outline-none focus:ring-2 focus:ring-accent"
                  aria-label={item.name}
                  role="listitem"
                >
                  <div className="text-3xl group-hover:text-accent transition-all duration-300">
                    <Icon className="w-7 h-7" aria-label={item.name} />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-lg">{item.name}</p>
                </TooltipContent>
              </Tooltip>
            );
          })}
        </div>
      </TooltipProvider>
    </div>
  );
};

export default Skills;
