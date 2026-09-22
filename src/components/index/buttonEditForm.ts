import { useForm } from "@tanstack/react-form";
import * as z from "zod";
import { useLayoutStore, type Layout } from "@/routes/__root";

export const buttonEditSchema = z.object({
  icon: z.string().optional(),
  buttonColor: z.string().optional(),
  iconColor: z.string().optional(),
});

export function useButtonEditForm(buttonKey: keyof Layout) {
  const updateLayoutItem = useLayoutStore((state) => state.updateLayoutItem);
  const icon = useLayoutStore((state) => state.layout[buttonKey].icon);
  const buttonColor = useLayoutStore(
    (state) => state.layout[buttonKey].buttonColor,
  );
  const iconColor = useLayoutStore(
    (state) => state.layout[buttonKey].iconColor,
  );

  return useForm({
    defaultValues: {
      icon,
      buttonColor,
      iconColor,
    },
    validators: {
      onSubmit: buttonEditSchema,
    },
    onSubmit: async ({ value }) => {
      console.log(value.iconColor);
      updateLayoutItem(buttonKey, {
        icon: value.icon ?? "",
        buttonColor: value.buttonColor ?? "",
        iconColor: value.iconColor ?? "",
      });
    },
  });
}

export type ButtonEditForm = ReturnType<typeof useButtonEditForm>;
