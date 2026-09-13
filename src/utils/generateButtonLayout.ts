import { buttonKeys, useLayoutStore } from "@/routes/__root";
import {
  rasterizeSvgToImageData,
  packAlphaTo1Bit,
  bytesToBase64,
} from "./rasterizeIcon";

async function generateButttonLayoutConfig(): Promise<string> {
  const layout = useLayoutStore.getState().layout;

  const config = await Promise.all(
    buttonKeys.map(async (key) => {
      const { id, name, icon, color, actionType, target } = layout[key];
      const rasterizedIcon = await rasterizeSvgToImageData(icon, 32);
      const packedIcon = packAlphaTo1Bit(rasterizedIcon);
      return {
        id,
        name,
        icon: bytesToBase64(packedIcon),
        color,
        action: `${actionType}:${target}`,
      };
    }),
  );

  return JSON.stringify(config);
}

export { generateButttonLayoutConfig };
