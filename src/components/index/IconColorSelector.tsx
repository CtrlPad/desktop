import type { ButtonEditForm } from "./buttonEditForm";
import { HexColorPicker } from "react-colorful";
import { Label } from "@/components/ui/label";

interface Props {
  form: ButtonEditForm;
}

export default function IconColorSelector({ form }: Props) {
  return (
    <div className="flex-1 min-w-0">
      <Label htmlFor="iconColor">Icon Color</Label>
      <form.Field
        name="iconColor"
        children={(field) => {
          return (
            <>
              <HexColorPicker
                style={{
                  width: "100%",
                }}
                color={field.state.value}
                onChange={field.handleChange}
              />
            </>
          );
        }}
      />
    </div>
  );
}
