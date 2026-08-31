import * as React from "react";
import {
  Combobox,
  ComboboxPrimitive,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxList,
  ComboboxItem,
  ComboboxInput,
} from "@/components/ui/combobox";
import * as icons from "simple-icons";
import { useVirtualizer } from "@tanstack/react-virtual";
import type { ButtonEditForm } from "./buttonEditForm";

type Virtualizer = ReturnType<typeof useVirtualizer<HTMLDivElement, Element>>;

interface VirtualizedItem {
  title: string;
  slug: string;
  hex: string;
  svg: string;
}

const ALL_ICONS = Object.values(icons).map((icon) => ({
  title: icon.title,
  slug: icon.slug,
  hex: icon.hex,
  svg: icon.svg,
}));

interface Props {
  form: ButtonEditForm;
}

export default function IconSelector({ form }: Props) {
  const [open, setOpen] = React.useState(false);
  const virtualizerRef = React.useRef<Virtualizer | null>(null);

  return (
    <form.Field
      name="icon"
      children={(field) => {
        return (
          <Combobox<VirtualizedItem>
            items={ALL_ICONS}
            virtualized
            open={open}
            onOpenChange={setOpen}
            itemToStringLabel={getItemLabel}
            value={
              ALL_ICONS.find((icon) => icon.slug === field.state.value) ?? null
            }
            onValueChange={(icon) => field.handleChange(icon?.slug ?? "")}
            onItemHighlighted={(item, { reason, index }) => {
              const virtualizer = virtualizerRef.current;

              if (!item || !virtualizer) {
                return;
              }

              const isStart = index === 0;
              const isEnd = index === virtualizer.options.count - 1;
              const shouldScroll =
                reason === "none" ||
                (reason === "keyboard" && (isStart || isEnd));

              if (shouldScroll) {
                queueMicrotask(() => {
                  virtualizer.scrollToIndex(index, {
                    align: isEnd ? "start" : "end",
                  });
                });
              }
            }}
          >
            <ComboboxInput placeholder="Search icons…" />
            <ComboboxContent className="w-[var(--anchor-width)] max-w-[var(--available-width)]">
              <ComboboxEmpty>No icons found :(</ComboboxEmpty>
              <ComboboxList className="p-0">
                <VirtualizedList virtualizerRef={virtualizerRef} open={open} />
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
        );
      }}
    />
  );
}

function VirtualizedList({
  virtualizerRef,
  open,
}: {
  virtualizerRef: React.RefObject<Virtualizer | null>;
  open: boolean;
}) {
  const filteredItems = ComboboxPrimitive.useFilteredItems<VirtualizedItem>();
  const scrollElementRef = React.useRef<HTMLDivElement | null>(null);
  const virtualizer = useVirtualizer({
    enabled: open,
    count: filteredItems.length,
    getScrollElement: () => scrollElementRef.current,
    estimateSize: () => 32,
    overscan: 20,
    paddingStart: 4,
    paddingEnd: 4,
    scrollPaddingEnd: 4,
    scrollPaddingStart: 4,
  });

  React.useImperativeHandle(virtualizerRef, () => virtualizer);

  const handleScrollElementRef = React.useCallback(
    (element: HTMLDivElement | null) => {
      scrollElementRef.current = element;
      if (element) {
        virtualizer.measure();
      }
    },
    [virtualizer],
  );

  const totalSize = virtualizer.getTotalSize();

  if (!filteredItems.length) {
    return null;
  }

  return (
    <div
      role="presentation"
      ref={handleScrollElementRef}
      className="h-[min(22.5rem,var(--total-size))] max-h-[var(--available-height)] overflow-auto overscroll-contain scroll-py-1"
      style={{ "--total-size": `${totalSize}px` } as React.CSSProperties}
    >
      <div
        role="presentation"
        className="relative w-full"
        style={{ height: totalSize }}
      >
        {virtualizer.getVirtualItems().map((virtualItem) => {
          const item = filteredItems[virtualItem.index];
          if (!item) {
            return null;
          }
          return (
            <ComboboxItem
              key={virtualItem.key}
              index={virtualItem.index}
              data-index={virtualItem.index}
              ref={virtualizer.measureElement}
              value={item}
              aria-setsize={filteredItems.length}
              aria-posinset={virtualItem.index + 1}
              className="flex gap-2"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: virtualItem.size,
                transform: `translateY(${virtualItem.start}px)`,
              }}
            >
              <span
                className="[&>svg]:fill-(--icon-color)"
                style={
                  { "--icon-color": `#${item.hex}` } as React.CSSProperties
                }
                aria-hidden="true"
                dangerouslySetInnerHTML={{ __html: item.svg }}
              />
              <span>{item.title}</span>
            </ComboboxItem>
          );
        })}
      </div>
    </div>
  );
}

function getItemLabel(item: VirtualizedItem | null) {
  return item ? item.title : "";
}
