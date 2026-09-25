import { useEffect, useState } from "react";
import { load } from "@tauri-apps/plugin-store";
import type { Layout } from "@/routes/__root";

const saveSettings = async (layout: Layout) => {
  try {
    const store = await load("settings.json", { autoSave: true });
    await store.set("buttonLayout", layout);
  } catch (error) {
    console.log(error);
  }
};

const useSaveSettings = () => {
  return { saveSettings };
};

const useLoadSettings = () => {
  const [buttonLayout, setButtonLayout] = useState<Layout | null>(null);

  useEffect(() => {
    const loadSettings = async () => {
      try {
        const store = await load("settings.json", { autoSave: true });
        const layout = await store.get<Layout>("buttonLayout");
        setButtonLayout(layout ?? null);
      } catch (error) {
        console.log(error);
      }
    };
    loadSettings();
  }, []);

  return buttonLayout;
};

export { saveSettings, useSaveSettings, useLoadSettings };
