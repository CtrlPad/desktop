import {
  Popover,
  PopoverContent,
  PopoverTitle,
  PopoverHeader,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Pen, Undo2 } from "lucide-react";
import IconSelector from "./IconSelector";
import ColorSelector from "./ColorSelector";
import { useButtonEditForm } from "./buttonEditForm";

interface Props {
  buttonId: number;
}

const ButtonEditPopover = ({ buttonId }: Props) => {
  const form = useButtonEditForm();

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
        <form
          id="button-edit"
          className="gap-2 flex flex-col"
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
        >
          <IconSelector form={form} />
          <ColorSelector form={form} />
        </form>
        <div className="flex flex-row gap-1">
          <Button
            form="button-edit"
            type="reset"
            variant="outline"
            size="icon"
            onClick={() => form.reset()}
          >
            <Undo2 />
          </Button>
          <Button form="button-edit" type="submit" className="flex-1">
            Apply
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ButtonEditPopover;
