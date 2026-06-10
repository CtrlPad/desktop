import { Sidebar, SidebarHeader } from "@/components/ui/sidebar"


function ButtonSidebar() {
  return (
    <Sidebar variant="floating" collapsible="offcanvas" side="right">
      <SidebarHeader>
        Edit ctrlPad Button Layout
      </SidebarHeader>
    </Sidebar>
  )
}

export default ButtonSidebar
