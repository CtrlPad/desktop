import {
  DropdownMenu,
  DropdownMenuGroup,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem
} from "@/components/ui/dropdown-menu"

const applications: string[] = [
  "Discord",
  "Spotify",
  "Bitwarden"
]

const media: string[] = [
  "Volume Up",
  "Volume Down",
  "Mute Microphone"
]

interface Button {
  id: number;
  label: string;
}

interface Props {
  button: Button;
  currentAction: string;
  onSelectAction: (buttonId: number, actionName: string) => void;
}

const ButtonElement = ({ button, currentAction, onSelectAction }: Props) => {
  const handleItemClick = (item: string) => {
    onSelectAction(button.id, item);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex items-center justify-center border-3 border-primary size-24 rounded-md text-primary">
          <p>{button.label}</p>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64">
        <DropdownMenuGroup>
          <DropdownMenuLabel className="text-sm text-primary">Edit Button {button.id + 1}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuLabel>Open Application</DropdownMenuLabel>
          {applications.map((item) => (
            <DropdownMenuCheckboxItem
              checked={currentAction === item}
              onCheckedChange={() => handleItemClick(item)}>
              {item}
            </DropdownMenuCheckboxItem>
          ))}
          <DropdownMenuSeparator />
          <DropdownMenuLabel>Media</DropdownMenuLabel>
          {media.map((item) => (
            <DropdownMenuCheckboxItem
              checked={currentAction === item}
              onCheckedChange={() => handleItemClick(item)}>
              {item}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export { ButtonElement } 
