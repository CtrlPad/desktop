import { ButtonElement } from "./ButtonElement";
import { buttonKeys, useLayoutStore } from "@/routes/__root";

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
