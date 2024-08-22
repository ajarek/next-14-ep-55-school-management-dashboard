'use client'

import { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

type ValuePiece = Date | null

type Value = ValuePiece | [ValuePiece, ValuePiece]

const CalendarDate = () => {
  const [value, onChange] = useState<Value>(new Date())

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        locale="en-GB"
      />
        <div>{(value?.toLocaleString())?.slice(0,10)}</div>
    </div>
  
  )
}

export default CalendarDate
