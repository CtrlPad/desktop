import { useForm } from "@tanstack/react-form";
import * as z from "zod";
import { useLayoutStore, type Layout } from "@/routes/__root";

export const buttonEditSchema = z.object({
  icon: z.string().optional(),
  color: z.string().optional(),
});

export function useButtonEditForm(buttonKey: keyof Layout) {
  const updateLayoutItem = useLayoutStore((state) => state.updateLayoutItem);
  const icon = useLayoutStore((state) => state.layout[buttonKey].icon);

  return useForm({
    defaultValues: {
      icon,
      color: "",
    },
    validators: {
      onSubmit: buttonEditSchema,
    },
    onSubmit: async ({ value }) => {
      console.log(value.icon);
      updateLayoutItem(buttonKey, { icon: value.icon });
    },
  });
}

export type ButtonEditForm = ReturnType<typeof useButtonEditForm>;
