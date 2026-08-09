import { createRootRoute, Outlet } from "@tanstack/react-router";
import "../App.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import AppSidebar from "@/components/common/AppSidebar";
import { DragDropProvider } from "@dnd-kit/react";
import { create } from "zustand";

interface LayoutItem {
  id: number;
  name: string;
  icon: string;
  action: string;
}

interface Layout {
  btn0: LayoutItem;
  btn1: LayoutItem;
  btn2: LayoutItem;
  btn3: LayoutItem;
  btn4: LayoutItem;
  btn5: LayoutItem;
}

interface LayoutStore {
  layout: Layout;
  updateLayoutItem: (key: keyof Layout, value: Partial<LayoutItem>) => void;
}

export const useLayoutStore = create<LayoutStore>((set) => ({
  layout: {
    btn0: {
      id: 0,
      name: "",
      icon: "",
      action: "",
    },
    btn1: {
      id: 1,
      name: "",
      icon: "",
      action: "",
    },
    btn2: {
      id: 2,
      name: "",
      icon: "",
      action: "",
    },
    btn3: {
      id: 3,
      name: "",
      icon: "",
      action: "",
    },
    btn4: {
      id: 4,
      name: "",
      icon: "",
      action: "",
    },
    btn5: {
      id: 5,
      name: "",
      icon: "",
      action: "",
    },
  },
  updateLayoutItem: (key, value) =>
    set((state) => ({
      layout: {
        ...state.layout,
        [key]: {
          ...state.layout[key],
          ...value,
        },
      },
    })),
}));

const RootLayout = () => {
  const layout = useLayoutStore((state) => state.layout);
  const updateLayoutItem = useLayoutStore((state) => state.updateLayoutItem);

  return (
    <>
      <SidebarProvider>
        <DragDropProvider
          onDragEnd={(event) => {
            if (event.canceled) return;

            const { target, source } = event.operation;
            console.log(target?.id, source?.id);
            if (!target) return;

            if (target.id in layout) {
              const layoutKey = target.id as keyof Layout;
              const dragData = source?.data as Partial<LayoutItem> | undefined;
              console.log(dragData);

              if (dragData) {
                updateLayoutItem(layoutKey, {
                  name: dragData.name || "",
                  icon: dragData.icon || "",
                  action: dragData.action || "",
                });
              }
            }
          }}
        >
          <TooltipProvider>
            <AppSidebar />
            <Outlet />
          </TooltipProvider>
        </DragDropProvider>
      </SidebarProvider>
    </>
  );
};

export const Route = createRootRoute({
  component: RootLayout,
});
