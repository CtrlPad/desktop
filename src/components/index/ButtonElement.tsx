import { useDroppable } from "@dnd-kit/react";
import ButtonEditPopover from "./ButtonEditPopover";

interface Props {
  id: string;
  data: string;
  buttonIndex: number;
}
// FIXME: const ButtonElement = ({ id, data, buttonIndex }: Props) => { USE DATA PROP
const ButtonElement = ({ id, buttonIndex }: Props) => {
  const { isDropTarget, ref } = useDroppable({
    id: id,
  });

  return (
    <div
      className={`relative flex items-center justify-center border-3 size-24 rounded-md text-primary transition-colors ${isDropTarget ? "border-green-500" : "border-primary"}`}
      ref={ref}
    >
      <div className="absolute bottom-0 right-0">
        <ButtonEditPopover buttonId={buttonIndex} />
      </div>
    </div>
  );
};

export { ButtonElement };
