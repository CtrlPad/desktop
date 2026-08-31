import { useDroppable } from "@dnd-kit/react";
import ButtonEditPopover from "./ButtonEditPopover";

interface Props {
  buttonId: string;
  buttonData: string;
  buttonIndex: number;
}
const ButtonElement = ({ buttonId, buttonData, buttonIndex }: Props) => {
  const { isDropTarget, ref } = useDroppable({
    id: buttonId,
  });

  return (
    <div
      className={`relative flex items-center justify-center border-3 size-24 rounded-md text-primary transition-colors ${isDropTarget ? "border-green-500" : "border-primary"}`}
      ref={ref}
    >
      <span className="text-muted-foreground">{buttonData || ""}</span>
      <div className="absolute bottom-0 right-0">
        <ButtonEditPopover buttonId={buttonIndex} />
      </div>
    </div>
  );
};

export { ButtonElement };
