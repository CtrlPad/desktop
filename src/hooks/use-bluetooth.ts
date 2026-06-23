import { useEffect, useState } from "react";
import {
  connect,
  sendString,
  startScan,
  type BleDevice,
} from "@mnlphlp/plugin-blec";
import { generateButttonLayoutConfig } from "@/utils/generateButtonLayout";

const useScanDevices = () => {
  const [bleDevices, setBleDevices] = useState<BleDevice[]>([]);

  const scanDevices = async () => {
    try {
      const scanHandler = (devices: BleDevice[]) => {
        setBleDevices(devices);
      };
      await startScan(scanHandler, 10000, true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    scanDevices();
  }, []);

  return { bleDevices, scanDevices };
};

const useConnectDevice = () => {
  const connectDevice = async (address: string) => {
    try {
      await connect(address, null, true);
    } catch (error) {
      console.log(error);
    }
  };
  return { connectDevice };
};

const useSendLayout = () => {
  const sendLayout = async () => {
    try {
      console.log("Config:", generateButttonLayoutConfig());
      await sendString(
        "62148466-62a9-4f65-bc29-2c2e408b8684",
        generateButttonLayoutConfig(),
      );
    } catch (error) {
      console.log(error);
    }
  };
  return { sendLayout };
};

export { useScanDevices, useConnectDevice, useSendLayout };
