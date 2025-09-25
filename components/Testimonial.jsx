// 'use client'
// import {Swiper, SwiperSlide} from 'swiper/react';
// // Import Swiper core and required modules
// import {Autoplay} from 'swiper/modules';
// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

// import { ImQuotesLeft } from 'react-icons/im';


// const testimonial = [
//     {
//         message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//         name: "Yann Mouandza",
//     },  
//     {
//         message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//         name: "Yann Mouandza",
//     }, 
//     {
//         message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//         name: "Yann Mouandza",
//     }, 
// ];


// const Testimonial = () => {
//   return (
//     <Swiper modules={[Autoplay]} Loop={true} autoplay={{delay:4000, disableOnInteraction,Interaction: false}} className="w-full max-w-[310px] md:max-w-[520px] bg-secondary rounded-lg">
//         {testimonial.map((person, index) => {
//             return <SwiperSlide key={index}>{person.message}</SwiperSlide>;
//         })}
//     </Swiper>
//   )
// }

// export default Testimonial

'use client'
import {Swiper, SwiperSlide} from 'swiper/react';
// Import Swiper core and required modules
import {Autoplay} from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { ImQuotesLeft } from 'react-icons/im';

const testimonial = [
  {
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    name: "Yann Mouandza",
  },
  {
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    name: "Yann Mouandza",
  },
  {
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    name: "Yann Mouandza",
  },
];

const Testimonial = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      loop={true}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      className="w-full max-w-[310px] md:max-w-[520px] bg-secondary rounded-lg"
    >
      {testimonial.map((person, index) => {
        return <SwiperSlide key={index}>{person.message}</SwiperSlide>;
      })}
    </Swiper>
  )
}

export default Testimonial
