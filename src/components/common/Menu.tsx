import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { BluetoothSearching, Pencil } from "lucide-react"

function Menu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-lg [&>svg]:h-5 [&>svg]:w-5">
            CtrlPad
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink className="w-48" href="/">
              <Pencil />
              <span>Edit Button Layout</span>
            </NavigationMenuLink>
            <NavigationMenuLink className="w-48" href="/connection">
              <BluetoothSearching />
              <span>Bluetooth Connections</span>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default Menu
