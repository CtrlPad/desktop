import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function Settings() {
  return (
    <div className="flex w-full h-screen items-center justify-center">
      <Card className="flex w-4xl">
        <CardHeader>
          <CardTitle>
            <h1>Settings</h1>
          </CardTitle>
        </CardHeader>
        <CardContent className="h-64 flex justify-center items-center">
          <p>Maybe Soon</p>
        </CardContent>
        <CardFooter className="flex flex-row space-x-5 justify-center h-5 text-xs">
          <p>OS: ...</p>
          <p>Architekture: ...</p>
          <p>Version: ...</p>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Settings 
