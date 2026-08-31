import { useForm } from "@tanstack/react-form";
import * as z from "zod";

export const buttonEditSchema = z.object({
  icon: z.string().min(1, "Please select an icon."),
  color: z.string().min(1, "Please select a color."),
});

export function useButtonEditForm() {
  return useForm({
    defaultValues: {
      icon: "",
      color: "",
    },
    validators: {
      onSubmit: buttonEditSchema,
    },
    onSubmit: async ({ value }) => {
      console.log("Submit: ", value);
    },
  });
}

export type ButtonEditForm = ReturnType<typeof useButtonEditForm>;
