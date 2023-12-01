import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";


export default function Home() {
  return (
    <>
      <div className="flex flex-col">
        <p className='text-3xl font-bold text-indigo-500'>
          Hello Discord Clone
        </p>
        <Button>Click me</Button>
        <Card className="w-1/2">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
    </>
  )
}
