import {
  DropdownMenu,
  DropdownMenuGroup,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem
} from "@/components/ui/dropdown-menu"

interface Props {
  id: number;
  label: string;
}

const buttons: Props[] = [
  { id: 0, label: "0" },
  { id: 1, label: "1" },
  { id: 2, label: "2" },
  { id: 3, label: "3" },
  { id: 4, label: "4" },
  { id: 5, label: "5" },
]

const applications = [
  "Discord",
  "Spotify",
  "Bitwarden"
]

const media = [
  "Volume Up",
  "Volume Down",
  "Mute Microphone"
]

export const ButtonGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-4 max-w-80">
      {buttons.map((button) => (
        <ButtonElement key={button.id} {...button} />
      ))}
    </div>
  )
}

const ButtonElement = ({ label, id }: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex items-center justify-center border-3 border-primary size-24 rounded-md text-primary">
          <p>{label}</p>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64">
        <DropdownMenuGroup>
          <DropdownMenuLabel className="text-sm text-primary">Edit Button {id + 1}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuLabel>Open Application</DropdownMenuLabel>
          {applications.map((application) => (
            <DropdownMenuCheckboxItem>{application}</DropdownMenuCheckboxItem>
          ))}
          <DropdownMenuSeparator />
          <DropdownMenuLabel>Media</DropdownMenuLabel>
          {media.map((media) => (
            <DropdownMenuCheckboxItem>{media}</DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
