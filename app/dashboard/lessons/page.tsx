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
import { lessonsData } from '@/data/data'
import Image from 'next/image'

const Lessons = () => {
  return (
    <div>
      <h1 className='font-semibold text-xl'>All Lessons</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Info</TableHead>
            <TableHead className='max-lg:hidden'>Lesson ID</TableHead>
            <TableHead className='max-sm:hidden'>Subject</TableHead>
            <TableHead className='max-sm:hidden'>Class</TableHead>
            <TableHead className='max-lg:hidden'>Teacher</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {lessonsData.map((tr) => (
            <TableRow key={tr.id}>
             
              <TableCell className='max-lg:hidden'>{tr.id}</TableCell>

              <TableCell className='max-sm:hidden'>
                {tr.subject}
              </TableCell>
              <TableCell className='max-lg:hidden'>{tr.class}</TableCell>
              <TableCell className='max-lg:hidden'>{tr.teacher}</TableCell>
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

export default Lessons
