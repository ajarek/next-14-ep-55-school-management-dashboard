const Announcements = () => {
  return (
    <div className='flex flex-col gap-4 '>
      <div className=' rounded-md border-2 p-4  border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple'>
        <div className='flex items-center justify-between'>
          <h2 className='font-medium'>Lorem ipsum dolor sit</h2>
          <span className='text-xs rounded-md px-1 py-1'>2025-01-01</span>
        </div>
        <p className='text-sm text-gray-400 mt-1'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          expedita. Rerum, quidem facilis?
        </p>
      </div>
      <div className=' rounded-md border-2 p-4  border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple'>
        <div className='flex items-center justify-between'>
          <h2 className='font-medium'>Lorem ipsum dolor sit</h2>
          <span className='text-xs rounded-md px-1 py-1'>2025-01-01</span>
        </div>
        <p className='text-sm text-gray-400 mt-1'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          expedita. Rerum, quidem facilis?
        </p>
      </div>
     
    </div>
  )
}

export default Announcements
