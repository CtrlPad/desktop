import { createRootRoute, Outlet } from '@tanstack/react-router'
import "../App.css"
import { SidebarProvider } from "@/components/ui/sidebar"
import { TooltipProvider } from "@/components/ui/tooltip"
import AppSidebar from '@/components/common/AppSidebar'
import { DragDropProvider } from '@dnd-kit/react'

const RootLayout = () => {
  return (
    <>
      <SidebarProvider>
        <DragDropProvider onDragEnd={(event) => {
          if (event.canceled) return;

          const { target, source } = event.operation;
          console.log(target?.id, source?.id)
        }}>
          <TooltipProvider>
            <AppSidebar />
            <Outlet />
          </TooltipProvider>
        </DragDropProvider>
      </SidebarProvider>
    </>
  )
}

export const Route = createRootRoute({ component: RootLayout })
