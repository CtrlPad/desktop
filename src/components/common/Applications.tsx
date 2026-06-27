import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuAction,
  SidebarMenuSubItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar";
import { AppWindowMac, Disc3, GripVertical } from "lucide-react";
import { useDraggable } from "@dnd-kit/react";
import { useInstalledApps } from "@/hooks/use-applications";

const media = ["Volume Up", "Volume Down", "Volume Mute", "Microphone Toggle"];

function DraggableSidebarItem({
  id,
  icon,
  name,
  exec,
  children,
}: {
  id: string;
  icon?: string;
  name: string;
  exec: string;
  children: React.ReactNode;
}) {
  const { ref } = useDraggable({
    id: id,
    data: {
      name,
      icon,
      exec,
    },
  });
  return (
    <div ref={ref}>
      <SidebarMenuSubItem>
        <SidebarMenuSubButton className="flex justify-between select-none">
          {children}
          <GripVertical />
        </SidebarMenuSubButton>
      </SidebarMenuSubItem>
    </div>
  );
}

function Applications() {
  const { availableApplications } = useInstalledApps();
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton>
          Applications ({availableApplications.length})
        </SidebarMenuButton>
        <SidebarMenuAction>
          <AppWindowMac />
        </SidebarMenuAction>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuSub>
          {availableApplications.map((app, index) => (
            <DraggableSidebarItem
              id={app.name}
              name={app.name}
              exec={app.exec}
              key={index}
            >
              {app.name}
            </DraggableSidebarItem>
          ))}
        </SidebarMenuSub>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton>Media</SidebarMenuButton>
        <SidebarMenuAction>
          <Disc3 />
        </SidebarMenuAction>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuSub>
          {media.map((item) => (
            <DraggableSidebarItem id={item} exec="" name="" key={item}>
              {item}
            </DraggableSidebarItem>
          ))}
        </SidebarMenuSub>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}

export default Applications;
