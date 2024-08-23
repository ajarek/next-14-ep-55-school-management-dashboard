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
import { parentsData } from '@/data/data'
import Image from 'next/image'

const Parents = () => {
  return (
    <div>
      <h1 className='font-semibold text-xl'>All Parents</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Info</TableHead>
            <TableHead className='max-lg:hidden'>Parent ID</TableHead>
            <TableHead className='max-sm:hidden'>Students</TableHead>
            <TableHead className='max-lg:hidden'>Phone</TableHead>
            <TableHead className='max-lg:hidden'>Address</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {parentsData.map((tr) => (
            <TableRow key={tr.id}>
              <TableCell>
                <div className='flex gap-2'>
                  <div className='flex flex-col gap-1'>
                    <div>{tr.name}</div>
                    <div className='text-gray-500'>{tr.email}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell className='max-lg:hidden'>{tr.id}</TableCell>
              <TableCell className='max-sm:hidden'>
              {tr.students.length > 1
                  ? `${tr.students[0]}, ${tr.students[1]}`
                  : tr.students[0]}
              </TableCell>
              
              <TableCell className='max-lg:hidden'>{tr.phone}</TableCell>
              <TableCell className='max-lg:hidden'>{tr.address}</TableCell>
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

export default Parents
