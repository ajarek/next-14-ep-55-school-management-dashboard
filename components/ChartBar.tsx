"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { month: "Mon", man: 50, woman: 60 },
  { month: "Tue", man: 65, woman: 78 },
  { month: "Wed", man: 72, woman: 89 },
  { month: "Thu", man: 73, woman: 81 },
  { month: "Fri", man: 55, woman: 75 },
 
]

const chartConfig = {
  man: {
    label: "Man",
    color: "hsl(var(--chart-1))",
  },
  woman: {
    label: "Woman",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function ChartBar() {
  return (
    <Card className="min-h-[365px]">
      <CardHeader className="text-center">
        <CardTitle>Attendance</CardTitle>
        <CardDescription>Last week</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="man" fill="var(--color-man)" radius={4} />
            <Bar dataKey="woman" fill="var(--color-woman)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex justify-center gap-2 ">
        <div className="flex items-center gap-2 font-medium leading-none text-2xl">
          <span className="h-5 w-5 rounded-full bg-green-500"></span>
          <h2>👩‍🎓</h2>
        </div>
        <div className="flex items-center gap-2 font-medium leading-none text-2xl">
          <span className="h-5 w-5 rounded-full bg-blue-400"></span>
          <h2>👨‍🎓</h2>
        </div>
        <div className="leading-none text-muted-foreground">
        
        </div>
      </CardFooter>
    </Card>
  )
}
