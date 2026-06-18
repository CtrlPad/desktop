import { useDroppable } from '@dnd-kit/react';

interface Props {
  id: string;
  data: string;
}

const ButtonElement = ({ id, data }: Props) => {
  const { ref } = useDroppable({
    id: id
  });

  function formatData(appName: string): string {
    return appName.replace(/app-|media-/, "")
  }

  return (
    <div
      className="flex items-center justify-center border-3 border-primary size-24 rounded-md text-primary"
      ref={ref}>
      {formatData(data) || "Empty"}
    </div>
  )
}

export { ButtonElement }
