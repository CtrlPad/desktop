import {
  Popover,
  PopoverContent,
  PopoverTitle,
  PopoverHeader,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Pen } from "lucide-react";
import IconSelector from "./IconSelector";

interface Props {
  buttonId: number;
}

const ButtonEditPopover = ({ buttonId }: Props) => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button size="icon" variant="ghost">
          <Pen size="16" />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="center">
        <PopoverHeader>
          <PopoverTitle>Edit Button {buttonId + 1} </PopoverTitle>
        </PopoverHeader>
        <IconSelector />
      </PopoverContent>
    </Popover>
  );
};

export default ButtonEditPopover;
