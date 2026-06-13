import { ButtonElement } from "./ButtonElement"
import { useSearch } from "@tanstack/react-router"

const buttonKeys = ["btn0", "btn1", "btn2", "btn3", "btn4", "btn5"]

export const ButtonGrid = () => {
  const searchParams = useSearch({ from: '__root__' })

  return (
    <div className="grid grid-cols-3 gap-4 max-w-80">
      {buttonKeys.map((key) => {
        const sourceId = searchParams[key];
        return (
          <ButtonElement
            key={key}
            id={key}
            data={sourceId}
          />
        )
      })}
    </div>
  )
}
