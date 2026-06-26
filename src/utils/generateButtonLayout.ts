import { useLayoutStore } from "@/routes/__root";

function generateButttonLayoutConfig(): string {
  const layout = useLayoutStore.getState().layout;
  return `[
    {
      "id":${layout["btn0"].id},
      "name":"${layout["btn0"].name}",
      "icon":"${layout["btn0"].icon}",
      "exec":"${layout["btn0"].exec}",
    },
    {
      "id":${layout["btn1"].id},
      "name":"${layout["btn1"].name}",
      "icon":"${layout["btn1"].icon}"
      "exec":"${layout["btn1"].exec}",
    },
    {
      "id":${layout["btn2"].id},
      "name":"${layout["btn2"].name}",
      "icon":"${layout["btn2"].icon}"
      "exec":"${layout["btn2"].exec}",
    },
    {
      "id":${layout["btn3"].id},
      "name":"${layout["btn3"].name}",
      "icon":"${layout["btn3"].icon}"
      "exec":"${layout["btn3"].exec}",
    },    
    {
      "id":${layout["btn4"].id},
      "name":"${layout["btn4"].name}",
      "icon":"${layout["btn4"].icon}"
      "exec":"${layout["btn4"].exec}",
    },
    {
      "id":${layout["btn5"].id},
      "name":"${layout["btn5"].name}",
      "icon":"${layout["btn5"].icon}"
      "exec":"${layout["btn5"].exec}",
    }
  ]`;
}

export { generateButttonLayoutConfig };
