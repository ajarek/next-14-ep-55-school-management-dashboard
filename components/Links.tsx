'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {role, teachersData} from '@/data/data'
const Links = () => {
  const pathname = usePathname()
  return (
    <div className=' w-full flex items-center justify-between text-gray-400  '>
     
      <div className='flex items-center gap-8 mr-4 '>
        <Link
          href='/'
          className={`flex items-center  text-xl hover:text-primary gap-2  ${
            pathname === '/home' ? 'active ' : ''
          }`}
        >
          <div className='text-lg flex flex-col items-center '>
         <span> {teachersData[0].name}</span>
          <span className='text-gray-500 text-sm'>{role}</span>

          </div>
          <Image
          width={32}
          height={32}
          src={teachersData[0].photo}
          alt='logo'
          className='w-10 h-10 rounded-full object-center object-cover'
        />
          
        </Link>
      </div>
    </div>
  )
}

export default Links
