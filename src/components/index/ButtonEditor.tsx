import { ButtonGrid } from "./ButtonGrid.tsx"
import { Button } from "@/components/ui/button"
import { ArrowUpIcon } from "lucide-react"

export const ButtonEditor = () => {
  return (
    <div className="relative flex bg-background w-full h-screen text-white items-center justify-center">
      <ButtonGrid />
      <Button className="absolute bottom-6 right-6" size="lg"><span>Upload to ctrlPad</span><ArrowUpIcon /></Button>
    </div>
  )
}
