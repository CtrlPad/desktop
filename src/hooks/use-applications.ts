import { useEffect, useState } from "react";
import { platform } from "@tauri-apps/plugin-os";
import { getApplications } from "@/utils/getXdgDataDirs";

interface Applications {
  name: string;
  exec: string;
}

const useInstalledApps = () => {
  const [availableApplications, setAvailableApplications] = useState<
    Applications[]
  >([]);
  const getInstalledApps = async () => {
    try {
      switch (platform()) {
        case "linux": {
          const applications = await getApplications();
          if (applications !== null) {
            setAvailableApplications(applications);
          }
          break;
        }
        default:
          console.log("Unsupported OS");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getInstalledApps();
  }, []);

  return { getInstalledApps, availableApplications };
};

export { useInstalledApps };
