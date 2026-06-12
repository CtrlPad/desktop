import { useDroppable } from '@dnd-kit/react';

interface Props {
  id: string;
  data: string;
}

const ButtonElement = ({ id, data }: Props) => {
  const { ref } = useDroppable({
    id: id
  });

  return (
    <div
      className="flex items-center justify-center border-3 border-primary size-24 rounded-md text-primary"
      ref={ref}>
      {data || "Empty"}
    </div>
  )
}

export { ButtonElement }
