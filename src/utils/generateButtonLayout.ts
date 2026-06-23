import { useLayoutStore } from "@/routes/__root";

function generateButttonLayoutConfig(): string {
  const layout = useLayoutStore.getState().layout;
  return `[
    {
      "id":${layout["btn0"].id},
      "name":"${layout["btn0"].name}",
      "icon":"${layout["btn0"].icon}"
    },
    {
      "id":${layout["btn1"].id},
      "name":"${layout["btn1"].name}",
      "icon":"${layout["btn1"].icon}"
    },
    {
      "id":${layout["btn2"].id},
      "name":"${layout["btn2"].name}",
      "icon":"${layout["btn2"].icon}"
    },
    {
      "id":${layout["btn3"].id},
      "name":"${layout["btn3"].name}",
      "icon":"${layout["btn3"].icon}"
    },    
    {
      "id":${layout["btn4"].id},
      "name":"${layout["btn4"].name}",
      "icon":"${layout["btn4"].icon}"
    },
    {
      "id":${layout["btn5"].id},
      "name":"${layout["btn5"].name}",
      "icon":"${layout["btn5"].icon}"
    }
  ]`;
}

export { generateButttonLayoutConfig };
