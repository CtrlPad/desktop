import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import packageJson from "../../../package.json";
import Menu from "@/components/common/Menu";
import Applications from "@/components/common/Applications";

function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <Menu />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Available Button Actions</SidebarGroupLabel>
          <Applications />
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="flex justify-between flex-row text-xs">
        <p>v{packageJson.version}</p>
        <p>by brainlesslukas</p>
      </SidebarFooter>
    </Sidebar>
  );
}

export default AppSidebar;
