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

const media = [
  { name: "Volume Up", actionType: "volume", target: "up" },
  { name: "Volume Down", actionType: "volume", target: "down" },
  { name: "Volume Mute", actionType: "volume", target: "mute" },
  { name: "Microphone Toggle", actionType: "microphone", target: "toggle" },
];

function DraggableSidebarItem({
  id,
  icon,
  name,
  actionType,
  target,
  children,
}: {
  id: string;
  icon?: string;
  name: string;
  actionType: string;
  target: string;
  children: React.ReactNode;
}) {
  const { ref } = useDraggable({
    id: id,
    data: {
      name,
      icon,
      actionType,
      target,
    },
  });
  return (
    <div ref={ref}>
      <SidebarMenuSubItem>
        <SidebarMenuSubButton className="flex justify-between">
          <span className="truncate">{children}</span>
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
              actionType={app.actionType}
              target={app.target}
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
            <DraggableSidebarItem
              id={item.name}
              name={item.name}
              actionType={item.actionType}
              target={item.target}
              key={item.name}
            >
              {item.name}
            </DraggableSidebarItem>
          ))}
        </SidebarMenuSub>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}

export default Applications;
