import type { ButtonEditForm } from "./buttonEditForm";
import { HexColorPicker } from "react-colorful";
import { Label } from "@/components/ui/label";

interface Props {
  form: ButtonEditForm;
}

export default function ButtonColorSelector({ form }: Props) {
  return (
    <>
      <Label htmlFor="buttonColor">Select Button backgrund Color</Label>
      <form.Field
        name="buttonColor"
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
