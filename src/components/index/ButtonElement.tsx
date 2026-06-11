interface Props {
  button: Button
}

interface Button {
  id: number;
  label: string
}

const ButtonElement = ({ button }: Props) => {
  return (
    <div className="flex items-center justify-center border-3 border-primary size-24 rounded-md text-primary">
      <p>{button.label}</p>
    </div>
  )
}

export { ButtonElement } 
