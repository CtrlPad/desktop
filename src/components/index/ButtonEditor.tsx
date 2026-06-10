import { ButtonGrid } from "./ButtonGrid.tsx"
import { Button } from "@/components/ui/button"
import { ArrowUpIcon } from "lucide-react"
import { useState } from "react"

export const ButtonEditor = () => {
  const [selectedActions, setSelectedActions] = useState<Record<number, string>>({});

  const handleSelectAction = (buttonId: number, actionName: string) => {
    setSelectedActions((prev) => ({
      ...prev,
      [buttonId]: prev[buttonId] === actionName ? "" : actionName,
    }));
  };

  const handleUpload = () => {
    console.log(selectedActions)
  }

  return (
    <div className="relative flex w-full h-screen items-center justify-center">
      <ButtonGrid selectedActions={selectedActions} onSelectAction={handleSelectAction} />
      <Button className="absolute bottom-6 right-6" size="lg" onClick={handleUpload}>
        <span>Upload to ctrlPad</span><ArrowUpIcon />
      </Button>
    </div>
  )
}
