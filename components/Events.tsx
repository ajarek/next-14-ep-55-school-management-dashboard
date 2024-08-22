import React from 'react'
const events = [
  {
    id: 1,
    title: 'Lorem ipsum dolor',
    time: '12:00 PM - 2:00 PM',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor',
    time: '12:00 PM - 2:00 PM',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 3,
    title: 'Lorem ipsum dolor',
    time: '12:00 PM - 2:00 PM',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
]

const Events = () => {
  return (
    <div className='flex flex-col gap-4'>
      {events.map((event) => (
        <div
          className='p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple'
          key={event.id}
        >
          <div className='flex items-center justify-between'>
            <h1 className='font-semibold text-gray-600'>{event.title}</h1>
            <div className='text-gray-300 text-xs'>{event.time}</div>
          </div>
          <div className='mt-2 text-gray-400 text-sm'>{event.description}</div>
        </div>
      ))}
    </div>
  )
}

export default Events
