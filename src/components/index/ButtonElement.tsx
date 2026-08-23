import { useDroppable } from "@dnd-kit/react";

interface Props {
  id: string;
  data: string;
}

const ButtonElement = ({ id, data }: Props) => {
  const { isDropTarget, ref } = useDroppable({
    id: id,
  });

  return (
    <div
      className={`flex items-center justify-center border-3 size-24 rounded-md text-primary transition-colors ${isDropTarget ? "border-green-500" : "border-primary"}`}
      ref={ref}
    >
      {data || ""}
    </div>
  );
};

export { ButtonElement };
