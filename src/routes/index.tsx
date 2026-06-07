import { createFileRoute } from '@tanstack/react-router'
import { SidebarTrigger } from "@/components/ui/sidebar"
import { ButtonEditor } from "../components/index/ButtonEditor"

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <>
      <SidebarTrigger />
      <ButtonEditor />
    </>
  )
}
