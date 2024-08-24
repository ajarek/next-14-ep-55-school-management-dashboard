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
import { examsData } from '@/data/data'
import Image from 'next/image'

const Exams = () => {
  return (
    <div>
      <h1 className='font-semibold text-xl'>All Exams</h1>
      <Table>
        <TableHeader>
          <TableRow>
            
            <TableHead className='max-lg:hidden'>Exams ID</TableHead>
            <TableHead className='max-sm:hidden'>Subject</TableHead>
            <TableHead className='max-sm:hidden'>Class</TableHead>
            <TableHead className='max-lg:hidden'>Teacher</TableHead>
            <TableHead className='max-lg:hidden'>Date</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {examsData.map((tr) => (
            <TableRow key={tr.id}>
             
              <TableCell className='max-lg:hidden'>{tr.id}</TableCell>

              <TableCell className='max-sm:hidden'>
                {tr.subject}
              </TableCell>
              <TableCell className='max-lg:hidden'>{tr.class}</TableCell>
              <TableCell className='max-lg:hidden'>{tr.teacher}</TableCell>
              <TableCell className='max-lg:hidden'>{tr.date}</TableCell>
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

export default Exams
