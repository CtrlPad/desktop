import { createRootRoute, Outlet } from '@tanstack/react-router'
import "../App.css"
import { SidebarProvider } from "@/components/ui/sidebar"
import { TooltipProvider } from "@/components/ui/tooltip"
import AppSidebar from '@/components/common/AppSidebar'
import { DragDropProvider } from '@dnd-kit/react'
import { create } from 'zustand'

interface Layout {
  btn0: string;
  btn1: string;
  btn2: string;
  btn3: string;
  btn4: string;
  btn5: string;
}

interface LayoutStore {
  layout: Layout
  updateLayoutItem: (key: keyof Layout, value: string) => void
}

export const useLayoutStore = create<LayoutStore>((set) => ({
  layout: {
    btn0: '',
    btn1: '',
    btn2: '',
    btn3: '',
    btn4: '',
    btn5: '',
  },
  updateLayoutItem: (key, value) =>
    set((state) => ({
      layout: {
        ...state.layout,
        [key]: value
      }
    })),
}))

const RootLayout = () => {
  const layout = useLayoutStore((state) => state.layout)
  const updateLayoutItem = useLayoutStore((state) => state.updateLayoutItem)

  return (
    <>
      <SidebarProvider>
        <DragDropProvider onDragEnd={(event) => {
          if (event.canceled) return;

          const { target, source } = event.operation;
          console.log(target?.id, source?.id)

          if (target?.id && target.id in layout) {
            const layoutKey = target.id as keyof Layout;
            const value = source?.id ?? '';

            updateLayoutItem(layoutKey, value);
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
  component: RootLayout
})
