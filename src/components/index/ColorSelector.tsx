import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxList,
  ComboboxItem,
  ComboboxInput,
} from "@/components/ui/combobox";
import type { ButtonEditForm } from "./buttonEditForm";

type Color = {
  label: string;
  value: string;
};

const colors: Color[] = [
  { label: "Red", value: "#c10007" },
  { label: "Yellow", value: "#fcc800" },
  { label: "Green", value: "#7ccf00" },
  { label: "Blue", value: "#155dfc" },
];

interface Props {
  form: ButtonEditForm;
}

export default function ColorSelector({ form }: Props) {
  return (
    <form.Field
      name="color"
      children={(field) => {
        return (
          <Combobox<Color>
            items={colors}
            itemToStringValue={(color) => color.label}
            value={
              colors.find((color) => color.value === field.state.value) ?? null
            }
            onValueChange={(color) => field.handleChange(color?.value ?? "")}
          >
            <ComboboxInput placeholder="Search background colors…" />
            <ComboboxContent className="w-[var(--anchor-width)] max-w-[var(--available-width)]">
              <ComboboxEmpty>No colors found :(</ComboboxEmpty>
              <ComboboxList className="p-0">
                {(item) => (
                  <ComboboxItem
                    key={item.label}
                    value={item}
                    className="flex gap-2"
                  >
                    <div
                      className="size-4 rounded-sm"
                      style={{ backgroundColor: item.value }}
                    />
                    <span>{item.label}</span>
                  </ComboboxItem>
                )}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
        );
      }}
    />
  );
}
