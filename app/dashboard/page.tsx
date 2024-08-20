import CardUser from '@/components/CardUser'
import React from 'react'

const Dashboard = () => {
  return (
    <div className="min-h-screen grid grid-cols-[2fr_1fr] max-lg:grid-cols-1  ">
      <div className='border border-amber-300 p-2'>
        <div className='grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1  gap-2'>
          <CardUser color="amber-300" value={1.218} type="Students" />
          <CardUser color="blue-300" value={124} type="Teachers" />
          <CardUser color="amber-300" value={960} type="Parents" />
          <CardUser color="blue-300" value={30} type="Staffs" />
        </div>
        <div></div>
        <div></div>
      </div>
      <div className='border border-blue-300'>
        <div>kot</div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Dashboard