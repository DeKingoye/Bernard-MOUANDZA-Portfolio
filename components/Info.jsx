import {HiOutlineMail, HiOutlinePhone, HiOutlineUser, HiOutlineLocationMarker} from 'react-icons/hi';

const Info = () => {
  return (
    <div className='flex flex-col gap-6 md:gap-10'>
        <div className='flex flex-col md:flex-row gap-4'>
            <div className='w-[280px] flex items-start gap-4'> 
                <HiOutlineUser className='text-2xl mt-1 text-accent'/>
                <div className='text-lg'>
                    <p>Date de Naissance</p>
                    <p>13 Mars 1993</p>
                </div>
            </div> 
        </div>
        <div className='w-[280px] flex items-start gap-4'> 
            <HiOutlineMail className='text-2xl mt-1 text-accent'/>
            <div className='text-lg'>
                <p className='text-lg'>Adresse Email</p>
                <p>yannmouandza3@gmail.com</p>
            </div>
        </div>
        
        <div className='flex flex-col md:flex-row gap-4'>
            <div className='w-[280px] flex items-start gap-4'> 
                <HiOutlinePhone className='text-2xl mt-1 text-accent'/>
                <div className='text-lg'>
                    <p>Téléphone</p>
                    <p>+33 7 63 44 37 42</p>
                </div>
            </div> 
        </div>
        <div className='w-[280px] flex items-start gap-4'> 
            <HiOutlineLocationMarker className='text-2xl mt-1 text-accent'/>
            <div className='text-lg'>
                <p className='text-lg'>Location</p>
                <p>Paris, France</p>
            </div>
        </div>
    </div>
  )
}

export default Info