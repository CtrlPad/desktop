import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxList,
  ComboboxItem,
  ComboboxInput,
} from "@/components/ui/combobox";

const colors = ["Red", "Blue", "Green", "Yellow"];

export default function ColorSelector() {
  return (
    <Combobox items={colors}>
      <ComboboxInput placeholder="Select Button Background-Color" />
      <ComboboxContent className="w-[var(--anchor-width)] max-w-[var(--available-width)]">
        <ComboboxEmpty>No colors found :(</ComboboxEmpty>
        <ComboboxList className="p-0">
          {(item) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}
