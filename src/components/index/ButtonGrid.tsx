import { ButtonElement } from "./ButtonElement";
import { useLayoutStore } from "@/routes/__root";

const buttonKeys = ["btn0", "btn1", "btn2", "btn3", "btn4", "btn5"] as const;

export const ButtonGrid = () => {
  const layout = useLayoutStore((state) => state.layout);

  return (
    <div className="grid grid-cols-3 gap-4 max-w-80">
      {buttonKeys.map((key) => {
        const applicationName = layout[key].name;
        return <ButtonElement key={key} id={key} data={applicationName} />;
      })}
    </div>
  );
};
