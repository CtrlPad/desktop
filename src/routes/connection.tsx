import { createFileRoute } from '@tanstack/react-router'
import { SidebarTrigger } from '@/components/ui/sidebar'
import Connection from '@/components/connection/Connection'

export const Route = createFileRoute('/connection')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <SidebarTrigger />
      <Connection />
    </>
  )
}
