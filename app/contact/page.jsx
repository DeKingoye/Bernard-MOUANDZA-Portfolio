'use client'; 
import {motion} from 'framer-motion';
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input"; 
import {Textarea} from "@/components/ui/textarea"; 
import {Select, SelectTrigger, SelectValue, SelectContent, SelectItem, } from "@/components/ui/select"; 

import {HiOutlineMapPin, HiOutlineArrowLongRight} from 'react-icons/hi2'; 
import {HiOutlinePhone, HiOutlineMail} from "react-icons/hi";


const Contact = () => {
  return (
    <motion.section
        initial={{opacity:0}}
         animate={{opacity:1, transition:{delay:2.4, duration:0.4, ease: "easeIn"},
         }}
        className='h-screen flex items-center py-15 xl:py-0'
        >
          <div className="container mx-auto w-full h-full flex flex-col items-center xl:justify-center xl:overflow-hidden scrollbar scrollbar-thumb-accent scrollbar-track-accent/5 overflow-y-scroll xl:overflow-y-visible">
            <div className='w-full'>
              <div className='flex flex-col xl:flex-row gap-6'>
                  {/* info text */}
                <div className='flex-1 xl:w-[600px] flex flex-col gap-12'>
                  {/* text */}
                  <div>
                    <h2 >Entrer en <span className='text-accent text-lg'>contact avec moi</span></h2><br /> 
                    
                    <p className='max-w-[460px]'>
                    Expert en transformation digitale, je suis passionné par la data et l’automatisation des processus. J’accompagne les organisations dans la modernisation de leurs outils et la valorisation de leurs données grâce à la Power Platform (Power BI, Power Apps, Power Automate, AiBuilder, Sharepoint). Mon objectif : transformer les données en leviers de décision et les tâches répétitives en flux intelligents, pour rendre les entreprises plus efficaces, agiles et orientées résultats.
                    </p>
                  </div>
                  {/* info */}
                  <div className='flex flex-col gap-8 mb-6 xl:mb-0'>
                    {/* phone */}
                    <div className='flex items-center gap-4 text-lg'>
                      <span className='text-accent'>
                        <HiOutlinePhone className='text-2xl'/>
                      </span>
                      <span>+33 7 63 44 37 42</span>
                    </div>

                    {/* email */}
                    <div className='flex items-center gap-4 text-lg'>
                      <span className='text-accent'>
                        <HiOutlineMail className='text-2xl'/>
                      </span>
                      <span>yannmouandza3@gmail.com</span>
                    </div>

                    {/* Location */}
                    <div className='flex items-center gap-4 text-lg'>
                      <span className='text-accent'>
                        <HiOutlineMapPin className='text-2xl'/>
                      </span>
                      <span> 1 Allée des galants-court, 91000 Evry-Courcouronnes</span>
                    </div>
                  </div>
                </div>
                  {/* form */}
                <div className='flex-1 hidden'>
                  <form className="flex flex-col gap-6 items-start">
                    {/* first and lastname */}
                    <div className='flex flex-col xl:flex-row gap-6 w-full'>
                      <div className='w-full'>
                        <Label htmlFor='name'>
                          Prenom <span className="text-accent">*</span>
                        </Label>
                        <Input 
                          id="firstname" 
                          name="firstname" 
                          placeholder="Prenom"
                          required
                        />
                      </div>
                      <div className='w-full'>
                        <Label htmlFor='name'>
                          Nom <span className="text-accent">*</span>
                        </Label>
                        <Input 
                          id="lastname" 
                          name="lastname" 
                          placeholder="Nom"
                          required
                        />
                      </div>
                    </div>
                    {/* email */}
                    <div className='w-full'>
                      <Label htmlFor='name'>
                        Email <span className="text-accent">*</span>
                      </Label>
                      <Input 
                        id="email" 
                        name="email" 
                        placeholder="tonemail@gmail.com"
                        required
                      />
                    </div>
                    {/* select */}
                    <div className='w-full'>
                      <Label htmlFor='name'>je suis interessé à <span className="text-accent"></span></Label>
                      <Select na='service' required>
                          <SelectTrigger id='service' className="w-full !h-12 bg-white/5 border-white/10 px-4">
                            <SelectValue placeholder="Choisir ici" />
                          </SelectTrigger>

                          <SelectContent className='bg-black border-white/20'>
                            <SelectItem value="Webdev">Developpement web</SelectItem>
                            <SelectItem value="uiux">UI & UX Design</SelectItem>
                            <SelectItem value="Logo">Logo Design</SelectItem>
                          </SelectContent>   
                      </Select>
                    </div>
                    {/* textarea */}
                    <div className='w-full'>
                      <Label htmlFor='name'>
                        Message<span className="text-accent"></span>
                      </Label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        placeholder="Ecris ton message ..." 
                        className='min-h-[160px] bg-white/5 border-white/10 focus-visible:border-accent focus-visible:ring-accent focus-visible:ring-[1px] resize-none p-4 selection:bg-accent placeholder:text-white/50'
                      />
                    </div>
                    {/* btn */}
                    <button className='btn btn-lg btn-accent'>
                      <div className='flex items-center gap-3'>
                        <span className='font-medium'>Envoyer message</span>
                        <HiOutlineArrowLongRight className='text-xl'/>
                      </div>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
    </motion.section>
  )
}

export default Contact