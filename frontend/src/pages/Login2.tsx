import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardAction,
  CardTitle,
} from "@/components/ui/Card"


export default function Login2() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
        <CardAction>Card Action</CardAction>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  )
}

