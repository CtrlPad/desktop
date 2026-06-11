import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuAction,
  SidebarMenuSubItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarHeader,
  SidebarGroupLabel
} from "@/components/ui/sidebar"
import { AppWindowMac, Disc3, GripVertical } from "lucide-react"
import packageJson from "../../../package.json"
import Menu from "@/components/common/Menu"
import { useDraggable } from '@dnd-kit/react';

const applications = [
  "Discord",
  "Spotify",
  "Bitwarden",
  "Zen Browser",
  "Ghostty",
]

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

function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <Menu />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Available Button Actions</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                Applications
              </SidebarMenuButton>
              <SidebarMenuAction>
                <AppWindowMac />
              </SidebarMenuAction>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuSub>
                {applications.map((item) => (
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
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="flex justify-between flex-row text-xs">
        <p>v{packageJson.version}</p>
        <p>by brainlesslukas</p>
      </SidebarFooter>
    </Sidebar >
  )
}

export default AppSidebar
