import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuAction,
  SidebarMenuSubItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar"
import { AppWindowMac, Disc3, GripVertical } from "lucide-react"
import { useDraggable } from '@dnd-kit/react';
import { useInstalledApps } from '@/hooks/use-applications';

const media = [
  "Volume Up",
  "Volume Down",
  "Volume Mute",
  "Microphone Toggle"
]

function DraggableSidebarItem({ id, children }: { id: string; children: React.ReactNode }) {
  const { ref } = useDraggable({
    id: id
  });
  return (
    <div ref={ref}>
      <SidebarMenuSubItem>
        <SidebarMenuSubButton className="flex justify-between">
          {children}
          <GripVertical />
        </SidebarMenuSubButton>
      </SidebarMenuSubItem>
    </div>
  )
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
          {availableApplications.map((item) => (
            <DraggableSidebarItem id={"app-" + item} key={"app-" + item}>{item}</DraggableSidebarItem>
          ))}
        </SidebarMenuSub>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton>
          Media
        </SidebarMenuButton>
        <SidebarMenuAction>
          <Disc3 />
        </SidebarMenuAction>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuSub>
          {media.map((item) => (
            <DraggableSidebarItem id={"media-" + item} key={"media-" + item}>{item}</DraggableSidebarItem>
          ))}
        </SidebarMenuSub>
      </SidebarMenuItem>

    </SidebarMenu>

  )
}

export default Applications
