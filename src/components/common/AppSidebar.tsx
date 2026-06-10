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
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { AppWindowMac, Bluetooth, Pencil, Disc3 } from "lucide-react"
import packageJson from "../../../package.json"

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

function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <NavigationMenu>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-lg [&_svg]:h-5 [&_svg]:w-5">ctrlPad</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink className="w-48">
                <Pencil />
                <span>Edit Button Layout</span>
              </NavigationMenuLink>
              <NavigationMenuLink className="w-48">
                <Bluetooth />
                <span>Bluetooth connection</span>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenu>
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
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton>
                      {item}
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
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
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton>
                      {item}
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
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
