'use client';
import {motion} from 'framer-motion';
import { ScrollArea } from '@/components/ui/scroll-area';
import Image from 'next/image';

//Components
import Stats from '@/components/Stats';
import Testimonial from '@/components/Testimonial';

const About = () => {
  return (
    <motion.section
        initial={{opacity:0}}
         animate={{opacity:1, transition:{delay:2.4, duration:0.4, ease: "easeIn"},
         }}
         className='h-screen flex items-center'
        >
          <div className='container mx-auto px-0'>
            <div className='flex flex-col xl:flex-row items-center gap-24 w-full h-[680px]'>
              {/* img & social icons */}
              <div className='hidden xl:flex w-full h-full pt-14 max-w-[430px] relative bg-pink-50/10'>1</div>
              {/* scroll area */}
              <ScrollArea className='w-full h-[680px]'>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <p>A propos</p>
                  </div>
                  <h2 className='h2 mb-6'>
                    <span className='text-accent'>Bernard</span> MOUANDZA
                  </h2>
                  <p className='max-w-[540px] mb-12'>Je suis entierement impliqué dans la transformation digitale des organisations, après des années passées chez afluens Group, j'ai gagné en maturité sur plusieurs sujets</p>
                  <div className='flex flex-col items-start gap-16'>
                    <Stats/>
                    <Testimonial/>
                    <div>info</div>
                    <div>Voyage</div>
                    <div>competences</div>
                  </div>
                </div>
              </ScrollArea>
            </div>
          </div>
        about
    </motion.section>
  )
}

export default About