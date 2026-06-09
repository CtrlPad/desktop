import { createFileRoute } from '@tanstack/react-router'
import { SidebarTrigger } from '@/components/ui/sidebar'

export const Route = createFileRoute('/connection')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <SidebarTrigger />
    </>
  )
}
