import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { classesData } from '@/data/data'
import Image from 'next/image'

const Classes = () => {
  return (
    <div>
      <h1 className='font-semibold text-xl'>All Classes</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Info</TableHead>
            <TableHead className='max-lg:hidden'>Student ID</TableHead>
            <TableHead className='max-sm:hidden'>Capacity</TableHead>
            <TableHead className='max-sm:hidden'>Grade</TableHead>
            <TableHead className='max-lg:hidden'>Supervisor</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {classesData.map((tr) => (
            <TableRow key={tr.id}>
              <TableCell>
                <div className='flex gap-2'>
                  
                  <div className='flex flex-col gap-1'>
                    <div>{tr.name}</div>
                    
                  </div>
                </div>
              </TableCell>
              <TableCell className='max-lg:hidden'>{tr.id}</TableCell>

              <TableCell className='max-sm:hidden'>
                {tr.capacity}
              </TableCell>
              <TableCell className='max-lg:hidden'>{tr.grade}</TableCell>
              <TableCell className='max-lg:hidden'>{tr.supervisor}</TableCell>
              <TableCell>
                <Button
                  size={'icon'}
                  variant={'outline'}
                  className='text-xl'
                >
                  🖊️
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default Classes
