import { useDroppable } from "@dnd-kit/react";

interface Props {
  id: string;
  data: string;
}

const ButtonElement = ({ id, data }: Props) => {
  const { isDropTarget, ref } = useDroppable({
    id: id,
  });

  function formatData(appName: string): string {
    return appName.replace(/app-|media-/, "");
  }

  return (
    <div
      className={`flex items-center justify-center border-3 size-24 rounded-md text-primary transition-colors ${isDropTarget ? "border-green-500" : "border-primary"}`}
      ref={ref}
    >
      {formatData(data) || "Empty"}
    </div>
  );
};

export { ButtonElement };
