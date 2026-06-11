import { useDroppable } from '@dnd-kit/react';

interface Props {
  button: Button
  children?: React.ReactNode
}

interface Button {
  id: number;
  label: string
}

const ButtonElement = ({ button, children }: Props) => {
  const { ref } = useDroppable({
    id: "drop-" + button.id
  });

  return (
    <div ref={ref} className="flex items-center justify-center border-3 border-primary size-24 rounded-md text-primary">
      {children || button.id}
    </div>
  )
}

export { ButtonElement }
