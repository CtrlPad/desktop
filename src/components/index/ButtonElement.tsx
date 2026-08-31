import { useDroppable } from "@dnd-kit/react";
import ButtonEditPopover from "./ButtonEditPopover";
import type { Layout, LayoutItem } from "@/routes/__root";

interface Props {
  buttonKey: keyof Layout;
  buttonData: LayoutItem;
}

const ButtonElement = ({ buttonKey, buttonData }: Props) => {
  const { isDropTarget, ref } = useDroppable({
    id: buttonKey,
  });

  return (
    <div
      className={`relative flex items-center justify-center border-3 size-24 rounded-md text-primary transition-colors ${isDropTarget ? "border-green-500" : "border-primary"}`}
      ref={ref}
    >
      <span className="text-muted-foreground">{buttonData.name || ""}</span>

      <div className="absolute bottom-0 left-0 p-2 flex flex-row gap-1 items-center">
        <span
          className="[&>svg]:size-4 [&>svg]:fill-current "
          aria-hidden="true"
          dangerouslySetInnerHTML={{ __html: buttonData.icon }}
        />
        <div
          className="size-4 rounded-xs"
          style={{ backgroundColor: buttonData.color }}
        />
      </div>

      <div className="absolute bottom-0 right-0">
        <ButtonEditPopover buttonKey={buttonKey} buttonIndex={buttonData.id} />
      </div>
    </div>
  );
};

export { ButtonElement };
