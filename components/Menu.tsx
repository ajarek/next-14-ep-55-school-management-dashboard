'use client'

import { role } from '@/data/data'
import Image from 'next/image'
import Link from 'next/link'

const menuItems = [
  {
    title: 'MENU',
    items: [
      {
        icon: '/images/home.png',
        label: 'Home',
        href: '/',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        icon: '/images/teacher.png',
        label: 'Teachers',
        href: '/dashboard/teachers',
        visible: ['admin', 'teacher'],
      },
      {
        icon: '/images/student.png',
        label: 'Students',
        href: '/dashboard/students',
        visible: ['admin', 'teacher'],
      },
      {
        icon: '/images/parent.png',
        label: 'Parents',
        href: '/dashboard/parents',
        visible: ['admin', 'teacher'],
      },
      {
        icon: '/images/subject.png',
        label: 'Subjects',
        href: '/dashboard/subjects',
        visible: ['admin'],
      },
      {
        icon: '/images/class.png',
        label: 'Classes',
        href: '/dashboard/classes',
        visible: ['admin', 'teacher'],
      },
      {
        icon: '/images/lesson.png',
        label: 'Lessons',
        href: '/dashboard/lessons',
        visible: ['admin', 'teacher'],
      },
      {
        icon: '/images/exam.png',
        label: 'Exams',
        href: '/dashboard/exams',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
    ]
  },
  
]

const Menu = () => {
  return (
    <div className='mt-4 text-sm'>
      {menuItems.map((i) => (
        <div
          className='flex flex-col gap-2'
          key={i.title}
        >
          <span className='hidden lg:block text-gray-400 font-light my-4'>
            {i.title}
          </span>
          {i.items.map((item) => {
            if (item.visible.includes(role)) {
              return (
                <Link
                  href={item.href}
                  key={item.label}
                  className={`flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2  hover:text-blue-500 transition-all delay-200 focus:text-blue-500 `}
                >
                  <Image
                    src={item.icon}
                    alt=''
                    width={20}
                    height={20}
                  />
                  <span className='hidden lg:block'>{item.label}</span>
                </Link>
              )
            }
          })}
        </div>
      ))}
    </div>
  )
}

export default Menu
