import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {teachersData} from '@/data/data'
import Image from "next/image"

const Teachers = () => {
  return (
    <div>
    <Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>Info</TableHead>
      <TableHead>Teacher ID</TableHead>
      <TableHead>Subjects</TableHead>
      <TableHead>Classes</TableHead>
      <TableHead>Phone</TableHead>
      <TableHead>Address</TableHead>
      <TableHead>Actions</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {teachersData.map((tr)=>
    (<TableRow key={tr.id}>
      <TableCell>
        <div className="flex gap-2">
          <div className="relative w-12 h-12 rounded-full overflow-hidden ">
          <Image src={tr.photo} alt="foto" fill className="w-full h-full object-cover object-center"/>
          </div>
          <div className="flex flex-col gap-1">
            <div>{tr.name}</div>
            <div className="text-gray-500">{tr.email}</div>
          </div>
        </div>
        </TableCell>
      <TableCell>{tr.teacherId}</TableCell>
      <TableCell>{tr.subjects.length>1?`${tr.subjects[0]}, ${tr.subjects[1]}`:tr.subjects[0]}</TableCell>
      <TableCell>{tr.classes[0]}, {tr.classes[1]}, {tr.classes[2]}</TableCell>
      <TableCell>{tr.phone}</TableCell>
      <TableCell>{tr.address}</TableCell>
      <TableCell><Button size={'icon'} variant={'outline'} className="text-xl">🖊️</Button></TableCell>
    </TableRow>)
    )}
  </TableBody>
</Table>
</div>
  )
}

export default Teachers