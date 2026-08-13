import { buttonKeys, useLayoutStore } from "@/routes/__root";

function generateButttonLayoutConfig(): string {
  const layout = useLayoutStore.getState().layout;

  const config = buttonKeys.map((key) => {
    const { id, name, icon, actionType, target } = layout[key];
    return {
      id,
      name,
      icon,
      action: `${actionType}:${target}`,
    };
  });

  return JSON.stringify(config);
}

export { generateButttonLayoutConfig };
