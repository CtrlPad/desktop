import { createRootRoute, Outlet } from '@tanstack/react-router'
import "../App.css"
import { SidebarProvider } from "@/components/ui/sidebar"
import { TooltipProvider } from "@/components/ui/tooltip"
import AppSidebar from '@/components/common/AppSidebar'
import { DragDropProvider } from '@dnd-kit/react'
import { useState } from 'react'

interface Layout {
  btn0: string;
  btn1: string;
  btn2: string;
  btn3: string;
  btn4: string;
  btn5: string;
}

const RootLayout = () => {
  const searchParams = Route.useSearch()
  const navigate = Route.useNavigate()
  const [layout, setLayout] = useState<Layout>(searchParams);

  return (
    <>
      <SidebarProvider>
        <DragDropProvider onDragEnd={(event) => {
          if (event.canceled) return;

          const { target, source } = event.operation;
          console.log(target?.id, source?.id)

          if (target?.id && target.id in layout) {
            setLayout((prev) => ({
              ...prev,
              [target.id]: source?.id ?? ''
            }));
            navigate({ search: (prev) => ({ ...prev, [target.id]: source?.id ?? '' }) })
          }
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

export const Route = createRootRoute({
  component: RootLayout,
  validateSearch: (search: Record<string, unknown>): Layout => {
    return {
      btn0: (search.btn0 as string) || '',
      btn1: (search.btn1 as string) || '',
      btn2: (search.btn2 as string) || '',
      btn3: (search.btn3 as string) || '',
      btn4: (search.btn4 as string) || '',
      btn5: (search.btn5 as string) || ''
    }
  }
})
