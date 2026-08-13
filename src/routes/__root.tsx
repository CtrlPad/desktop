import { createRootRoute, Outlet } from "@tanstack/react-router";
import "../App.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import AppSidebar from "@/components/common/AppSidebar";
import Statusbar from "@/components/common/Statusbar";
import { DragDropProvider } from "@dnd-kit/react";
import { create } from "zustand";

export interface LayoutItem {
  id: number;
  name: string;
  icon: string;
  actionType: string; // e.g application, volume, ...
  target: string; // spotify, +10, ...
}

export const buttonKeys = [
  "btn0",
  "btn1",
  "btn2",
  "btn3",
  "btn4",
  "btn5",
] as const;

type Layout = Record<(typeof buttonKeys)[number], LayoutItem>;

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
      actionType: "",
      target: "",
    },
    btn1: {
      id: 1,
      name: "",
      icon: "",
      actionType: "",
      target: "",
    },
    btn2: {
      id: 2,
      name: "",
      icon: "",
      actionType: "",
      target: "",
    },
    btn3: {
      id: 3,
      name: "",
      icon: "",
      actionType: "",
      target: "",
    },
    btn4: {
      id: 4,
      name: "",
      icon: "",
      actionType: "",
      target: "",
    },
    btn5: {
      id: 5,
      name: "",
      icon: "",
      actionType: "",
      target: "",
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
                  actionType: dragData.actionType || "",
                  target: dragData.target || "",
                });
              }
            }
          }}
        >
          <TooltipProvider>
            <AppSidebar />
            <Statusbar />
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
