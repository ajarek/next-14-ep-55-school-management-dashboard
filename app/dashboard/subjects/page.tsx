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
import { subjectsData } from '@/data/data'
import Image from 'next/image'

const Subjects = () => {
  return (
    <div>
      <h1 className='font-semibold text-xl'>All Subjects</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Info</TableHead>
            <TableHead className='max-lg:hidden'>Parent ID</TableHead>
            <TableHead className='max-sm:hidden'>Teachers</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {subjectsData.map((tr) => (
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
                {tr.teachers.length > 1
                  ? `${tr.teachers[0]}, ${tr.teachers[1]}`
                  : tr.teachers[0]}
              </TableCell>

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

export default Subjects
