import { useLayoutStore } from "@/routes/__root";

function generateButttonLayoutConfig(): string {
  const layout = useLayoutStore.getState().layout;
  return `[
    {
      "id":${layout["btn0"].id},
      "name":"${layout["btn0"].name}",
      "icon":"${layout["btn0"].icon}",
      "action":"${layout["btn0"].action}",
    },
    {
      "id":${layout["btn1"].id},
      "name":"${layout["btn1"].name}",
      "icon":"${layout["btn1"].icon}",
      "action":"${layout["btn1"].action}",
    },
    {
      "id":${layout["btn2"].id},
      "name":"${layout["btn2"].name}",
      "icon":"${layout["btn2"].icon}",
      "action":"${layout["btn2"].action}",
    },
    {
      "id":${layout["btn3"].id},
      "name":"${layout["btn3"].name}",
      "icon":"${layout["btn3"].icon}",
      "action":"${layout["btn3"].action}",
    },    
    {
      "id":${layout["btn4"].id},
      "name":"${layout["btn4"].name}",
      "icon":"${layout["btn4"].icon}",
      "action":"${layout["btn4"].action}",
    },
    {
      "id":${layout["btn5"].id},
      "name":"${layout["btn5"].name}",
      "icon":"${layout["btn5"].icon}",
      "action:"${layout["btn5"].action}",
    }
  ]`;
}

export { generateButttonLayoutConfig };
