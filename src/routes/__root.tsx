import { createRootRoute, Outlet } from '@tanstack/react-router'
import "../App.css"
import { SidebarProvider } from "@/components/ui/sidebar"
import { TooltipProvider } from "@/components/ui/tooltip"
import AppSidebar from '@/components/common/AppSidebar'

const RootLayout = () => (
  <>
    <SidebarProvider>
      <TooltipProvider>
        <AppSidebar />
        <Outlet />
      </TooltipProvider>
    </SidebarProvider>
  </>
)

export const Route = createRootRoute({ component: RootLayout })
