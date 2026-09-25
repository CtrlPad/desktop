import { createRootRoute, Outlet } from "@tanstack/react-router";
import "../App.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import AppSidebar from "@/components/common/AppSidebar";
import Statusbar from "@/components/common/Statusbar";
import { DragDropProvider } from "@dnd-kit/react";
import { create } from "zustand";
import { saveSettings, useLoadSettings } from "@/hooks/use-settings";
import { useEffect } from "react";

export interface LayoutItem {
  id: number;
  name: string;
  icon: string;
  iconColor: string;
  buttonColor: string;
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

export type Layout = Record<(typeof buttonKeys)[number], LayoutItem>;

interface LayoutStore {
  layout: Layout;
  updateLayoutItem: (key: keyof Layout, value: Partial<LayoutItem>) => void;
  setLayout: (layout: Layout) => void;
}

export const useLayoutStore = create<LayoutStore>((set, get) => ({
  layout: {
    btn0: {
      id: 0,
      name: "",
      icon: "",
      iconColor: "",
      buttonColor: "",
      actionType: "",
      target: "",
    },
    btn1: {
      id: 1,
      name: "",
      icon: "",
      iconColor: "",
      buttonColor: "",
      actionType: "",
      target: "",
    },
    btn2: {
      id: 2,
      name: "",
      icon: "",
      iconColor: "",
      buttonColor: "",
      actionType: "",
      target: "",
    },
    btn3: {
      id: 3,
      name: "",
      icon: "",
      iconColor: "",
      buttonColor: "",
      actionType: "",
      target: "",
    },
    btn4: {
      id: 4,
      name: "",
      icon: "",
      iconColor: "",
      buttonColor: "",
      actionType: "",
      target: "",
    },
    btn5: {
      id: 5,
      name: "",
      icon: "",
      iconColor: "",
      buttonColor: "",
      actionType: "",
      target: "",
    },
  },
  updateLayoutItem: (key, value) => {
    const newLayout = {
      ...get().layout,
      [key]: {
        ...get().layout[key],
        ...value,
      },
    };
    set({ layout: newLayout });
    saveSettings(newLayout);
  },
  setLayout: (layout) => set({ layout }),
}));

const RootLayout = () => {
  const layout = useLayoutStore((state) => state.layout);
  const updateLayoutItem = useLayoutStore((state) => state.updateLayoutItem);
  const setLayout = useLayoutStore((state) => state.setLayout);
  const savedLayout = useLoadSettings();

  useEffect(() => {
    if (savedLayout) setLayout(savedLayout);
  }, [savedLayout, setLayout]);

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
                  iconColor: dragData.iconColor || "",
                  buttonColor: dragData.buttonColor || "",
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
