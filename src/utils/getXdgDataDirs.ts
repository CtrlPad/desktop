import { invoke } from "@tauri-apps/api/core";
import { join } from "@tauri-apps/api/path";
import { exists, readTextFile, readDir } from '@tauri-apps/plugin-fs';

async function getXdgDataDirs(): Promise<string[]> {
  const dirString: string = await invoke("get_xdg_data_dirs")
  const dirs = dirString.split(":");
  return dirs
}

async function checkXdgDataDirs(dirs: string[]): Promise<string[]> {
  const checkedDirs: string[] = []
  for (const dir of dirs) {
    const appDir = await join(dir, "applications")
    if (await exists(appDir)) {
      checkedDirs.push(appDir)
    }
  }
  return checkedDirs
}

async function extractDataFromDesktopFile(filePath: string): Promise<string | null> {
  const content = await readTextFile(filePath)
  const name = content.match(/^Name=(.+)$/m);
  if (name && name[1]) {
    return name[1]
  }
}
async function getDesktopFile(filePath: string): Promise<string[] | null> {
  const desktopFiles: string[] = []
  const entries = await readDir(filePath)
  for (const entry of entries) {
    if (entry.name.endsWith(".desktop")) {
      const fullPath = await join(filePath, entry.name)
      desktopFiles.push(fullPath)
    }
  }
  return desktopFiles
}

async function getApplications(): Promise<string[]> {
  const desktopFileData: string[] = []
  const checkedDirs = await checkXdgDataDirs(await getXdgDataDirs())
  for (const dir of checkedDirs) {
    const desktopFile = await getDesktopFile(dir)

    for (const file of desktopFile) {
      const name = await extractDataFromDesktopFile(file)
      desktopFileData.push(name)
    }
  }
  return desktopFileData
}

export { getApplications }
