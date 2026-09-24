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
      className={`relative flex items-center flex-col justify-center border-3 size-24 rounded-md text-primary transition-colors ${isDropTarget ? "border-green-500" : "border-primary"}`}
      style={{ backgroundColor: buttonData.buttonColor }}
      ref={ref}
    >
      {buttonData.icon && (
        <div className="flex flex-row gap-1 items-center">
          <span
            className="[&>svg]:size-10 [&>svg]:fill-current "
            aria-hidden="true"
            dangerouslySetInnerHTML={{ __html: buttonData.icon }}
          />
        </div>
      )}
      <span className="text-muted-foreground text-sm">
        {buttonData.name || buttonData.id + 1}
      </span>
      <div className="absolute bottom-0 right-0">
        <ButtonEditPopover buttonKey={buttonKey} buttonIndex={buttonData.id} />
      </div>
    </div>
  );
};

export { ButtonElement };
