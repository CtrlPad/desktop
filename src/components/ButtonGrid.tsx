interface Props {
  label: string;
}

const buttons: Props[] = [
  { id: "btn-0", label: "0" },
  { id: "btn-1", label: "1" },
  { id: "btn-2", label: "2" },
  { id: "btn-3", label: "3" },
  { id: "btn-4", label: "4" },
  { id: "btn-5", label: "5" },
]

export const ButtonGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-4 max-w-80">
      {buttons.map((button) => (
        <Button key={button.id} label={button.label}/>
      ))} 
    </div>
  )
}

const Button = ({label}: Props) => {
  return (
    <div className="flex items-center justify-center border-2 border-white size-24 rounded-md">
      <p>{label}</p>
    </div>
  )
}
