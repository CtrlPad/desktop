import type { ButtonEditForm } from "./buttonEditForm";
import { HexColorPicker } from "react-colorful";
import { Label } from "@/components/ui/label";

interface Props {
  form: ButtonEditForm;
}

export default function ColorSelector({ form }: Props) {
  return (
    <>
      <Label htmlFor="color">Select Button backgrund Color</Label>
      <form.Field
        name="color"
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
    </>
  );
}
