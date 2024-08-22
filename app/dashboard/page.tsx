import Announcements from '@/components/Announcements'
import CalendarDate from '@/components/CalendarDate'
import CardUser from '@/components/CardUser'
import { ChartBar } from '@/components/ChartBar'
import { ChartLine } from '@/components/ChartLine'
import { ChartPie } from '@/components/ChartPie'
import Events from '@/components/Events'



const Dashboard = () => {
  return (
    <div className='min-h-screen grid grid-cols-[2fr_1fr] max-lg:grid-cols-1  '>
      <div className='p-2'>
        <div className='grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1  gap-2'>
          <CardUser
            color='bg-red-300'
            value={1.218}
            type='Students'
          />
          <CardUser
            color='bg-blue-300'
            value={124}
            type='Teachers'
          />
          <CardUser
            color='bg-amber-300'
            value={960}
            type='Parents'
          />
          <CardUser
            color='bg-green-300'
            value={30}
            type='Staffs'
          />
        </div>
        <div className='w-full grid grid-cols-2 max-lg:grid-cols-1'>
          <div>
            <ChartPie />
          </div>
          <div>
            {' '}
            <ChartBar />
          </div>
        </div>
        <div>
          <ChartLine />
        </div>
      </div>
      <div className='w-full flex flex-col items-center  border border-blue-300 p-2'>
        <div className=''>
         <CalendarDate/>
        </div>
        <div className='flex flex-col gap-2'>
          <h1>Events</h1>
          <Events/>
        </div>
        <div className='flex flex-col gap-2 mt-2'>
          <h1>Announcements</h1>
          <Announcements/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
