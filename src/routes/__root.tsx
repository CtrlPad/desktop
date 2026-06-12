import { createRootRouteWithContext, createRouter, Outlet } from '@tanstack/react-router'
import "../App.css"
import { SidebarProvider } from "@/components/ui/sidebar"
import { TooltipProvider } from "@/components/ui/tooltip"
import AppSidebar from '@/components/common/AppSidebar'
import { DragDropProvider } from '@dnd-kit/react'
import { useState, useEffect } from 'react'

interface Layout {
  btn0: string;
  btn1: string;
  btn2: string;
  btn3: string;
  btn4: string;
  btn5: string;
}

interface RouterContext {
  layout: Layout
}

const initialLayout: Layout = {
  btn0: "",
  btn1: "",
  btn2: "",
  btn3: "",
  btn4: "",
  btn5: ""
};

const RootLayout = () => {
  const [layout, setLayout] = useState<Layout>(initialLayout);

  useEffect(() => {
    console.log(layout);
  }, [layout]);

  return (
    <>
      <SidebarProvider>
        <DragDropProvider onDragEnd={(event) => {
          if (event.canceled) return;

          const { target, source } = event.operation;
          console.log(target?.id, source?.id)

          if (target && target.id in layout) {
            setLayout((prev) => ({
              ...prev,
              [target.id]: source?.id
            }));
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

export const Route = createRootRouteWithContext<RouterContext>()({ component: RootLayout })
