import { useDroppable } from "@dnd-kit/react";
import ButtonEditPopover from "./ButtonEditPopover";
import type { Layout } from "@/routes/__root";

interface Props {
  buttonId: keyof Layout;
  buttonData: string;
  buttonIndex: number;
  buttonIcon: string;
}
const ButtonElement = ({
  buttonId,
  buttonData,
  buttonIndex,
  buttonIcon,
}: Props) => {
  const { isDropTarget, ref } = useDroppable({
    id: buttonId,
  });

  return (
    <div
      className={`relative flex items-center justify-center border-3 size-24 rounded-md text-primary transition-colors ${isDropTarget ? "border-green-500" : "border-primary"}`}
      ref={ref}
    >
      <span className="text-muted-foreground">{buttonData || ""}</span>
      <span
        className="[&>svg]:size-4 [&>svg]:fill-current absolute bottom-0 left-0 p-2"
        aria-hidden="true"
        dangerouslySetInnerHTML={{ __html: buttonIcon }}
      />
      <div className="absolute bottom-0 right-0">
        <ButtonEditPopover buttonKey={buttonId} buttonIndex={buttonIndex} />
      </div>
    </div>
  );
};

export { ButtonElement };
