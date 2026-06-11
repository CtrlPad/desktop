import { ButtonElement } from "./ButtonElement"

const buttons = [
  { id: 0, label: "0" },
  { id: 1, label: "1" },
  { id: 2, label: "2" },
  { id: 3, label: "3" },
  { id: 4, label: "4" },
  { id: 5, label: "5" },
]

export const ButtonGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-4 max-w-80">
      {buttons.map((button) => (
        <ButtonElement
          key={button.id}
          button={button}
        />
      ))}
    </div>
  )
}
