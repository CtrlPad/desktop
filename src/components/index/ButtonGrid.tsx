import { ButtonElement } from "./ButtonElement";
import { buttonKeys, useLayoutStore } from "@/routes/__root";

export const ButtonGrid = () => {
  const layout = useLayoutStore((state) => state.layout);

  return (
    <div className="grid grid-cols-3 gap-4 max-w-80">
      {buttonKeys.map((key) => {
        const item = layout[key];
        return (
          <ButtonElement
            key={key}
            id={key}
            buttonIndex={item.id}
            data={item.name}
          />
        );
      })}
    </div>
  );
};
