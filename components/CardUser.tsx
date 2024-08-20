import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const CardUser = ({color, value, type}:{color:string, value:number, type:string}) => {
  return (
    <Card className={`w-full bg-${color} text-gray-600 `}>
    <CardHeader className="p-4">
      
      <CardDescription><span className="p-2 rounded-full bg-primary text-primary-foreground">2024/2025</span></CardDescription>
    </CardHeader>
    <CardContent className="py-1">
    <CardTitle>{value}</CardTitle>
    </CardContent>
    <CardFooter className="py-1">
      <p>{type}</p>
    </CardFooter>
  </Card>
  )
}

export default CardUser