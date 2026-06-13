import { ButtonGrid } from "./ButtonGrid.tsx"
import { Button } from "@/components/ui/button"
import { ArrowUpIcon } from "lucide-react"
import { useSendLayout } from "@/hooks/use-bluetooth"

export const ButtonEditor = () => {
  const { sendLayout } = useSendLayout()

  const exampleLayout: string = '[{"id":0,"name":"Mute","icon":"\uf130"},{"id":1,"name":"Volume increase","icon":"\uf028"},{"id":2,"name":"Volume decrease","icon":"\uf027"},{"id":3,"name":"Open Discord","icon":"\uf392"},{"id":4,"name":"Open Spotify","icon":"\uf1bc"},{"id":5,"name":"Open Bitwarden","icon":"\uf084"}]'

  return (
    <div className="relative flex w-full h-screen items-center justify-center">
      <ButtonGrid />
      <Button className="absolute bottom-6 right-6" size="lg" onClick={() => sendLayout(exampleLayout)}>
        <span>Upload to ctrlPad</span><ArrowUpIcon />
      </Button>
    </div>
  )
}
