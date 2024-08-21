'use client'

import { TrendingUp } from 'lucide-react'
import { CartesianGrid, Line, LineChart, XAxis } from 'recharts'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
const chartData = [
  { month: 'January', income: 186, expense: 80 },
  { month: 'February', income: 305, expense: 200 },
  { month: 'March', income: 237, expense: 120 },
  { month: 'April', income: 73, expense: 190 },
  { month: 'May', income: 209, expense: 130 },
  { month: 'June', income: 214, expense: 140 },
]

const chartConfig = {
  income: {
    label: 'Income',
    color: 'hsl(var(--chart-1))',
  },
  expense: {
    label: 'Expense',
    color: 'hsl(var(--chart-2))',
  },
} satisfies ChartConfig

export function ChartLine() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Finance</CardTitle>
        <CardDescription className='flex justify-center gap-4'>
          <div className='flex items-center gap-2 font-medium leading-none text-2xl'>
            <div className='h-5 w-5 rounded-full bg-blue-400'></div>
            <h2>Income</h2>
          </div>
          <div className='flex items-center gap-2 font-medium leading-none text-2xl'>
            <div className='h-5 w-5 rounded-full bg-green-500'></div>
            <h2>Expense</h2>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey='month'
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent />}
            />
            <Line
              dataKey='income'
              type='monotone'
              stroke='var(--color-income)'
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey='expense'
              type='monotone'
              stroke='var(--color-expense)'
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className='flex w-full '>
          <div className='w-full flex justify-center  gap-2  text-gray-500'>
            Trending up by 5.2% this month <TrendingUp className='h-4 w-4' />
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
