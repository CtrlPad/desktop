import { invoke } from "@tauri-apps/api/core";
import { join } from "@tauri-apps/api/path";
import { exists, readTextFile, readDir } from "@tauri-apps/plugin-fs";

interface Data {
  name: string;
  exec: string;
}

async function getXdgDataDirs(): Promise<string[]> {
  const dirString: string = await invoke("get_xdg_data_dirs");
  const dirs = dirString.split(":");
  return dirs;
}

async function checkXdgDataDirs(dirs: string[]): Promise<string[]> {
  const checkedDirs: string[] = [];
  for (const dir of dirs) {
    const appDir = await join(dir, "applications");
    if (await exists(appDir)) {
      checkedDirs.push(appDir);
    }
  }
  return checkedDirs;
}

async function extractDataFromDesktopFile(
  filePath: string,
): Promise<Data | null> {
  const content = await readTextFile(filePath);
  const nameMatch = content.match(/^Name=(.+)$/m);
  const execMatch = content.match(/^Exec=(.+)$/m);
  if (!nameMatch || !execMatch) return null;

  return {
    name: nameMatch[1],
    exec: execMatch[1],
  };
}

async function getDesktopFile(filePath: string): Promise<string[]> {
  const desktopFiles: string[] = [];
  const entries = await readDir(filePath);
  for (const entry of entries) {
    if (entry.name.endsWith(".desktop")) {
      const fullPath = await join(filePath, entry.name);
      desktopFiles.push(fullPath);
    }
  }
  return desktopFiles;
}

async function getApplications(): Promise<Data[]> {
  const desktopFileData: Data[] = [];
  const checkedDirs = await checkXdgDataDirs(await getXdgDataDirs());

  for (const dir of checkedDirs) {
    const desktopFile = await getDesktopFile(dir);

    for (const file of desktopFile) {
      const fileData = await extractDataFromDesktopFile(file);
      if (fileData !== null) {
        desktopFileData.push(fileData);
      }
    }
  }
  return desktopFileData;
}

export { getApplications };
