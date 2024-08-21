"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"

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
  { browser: "students", visitors: 1218, fill: "var(--color-students)" },
  { browser: "teachers", visitors: 124, fill: "var(--color-teachers)" },
  { browser: "parents", visitors: 960, fill: "var(--color-parents)" },
  { browser: "staffs", visitors: 30, fill: "var(--color-staffs)" },
  
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  students: {
    label: "Students",
    color: "rgb(252 165 165)",
  },
  teachers: {
    label: "Teachers",
    color: "rgb(147 197 253)",
  },
  parents: {
    label: "Parents",
    color: "rgb(252 211 77)",
  },
  staffs: {
    label: "Staffs",
    color: "rgb(134 239 172)",
  },
  
} satisfies ChartConfig

export function ChartPie() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0)
  }, [])

  return (
    <Card className="flex flex-col min-h-[365px]">
      <CardHeader className="items-center pb-0">
        <CardTitle>All together</CardTitle>
        <CardDescription>Year 2024/2025</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          All together
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
        Staff to student ratios
        </div>
      </CardFooter>
    </Card>
  )
}
