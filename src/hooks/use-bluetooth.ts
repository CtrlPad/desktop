import { useEffect, useState } from "react";
import { connect, startScan, type BleDevice } from "@mnlphlp/plugin-blec"

const useScanDevices = () => {
  const [bleDevices, setBleDevices] = useState<BleDevice[]>([])

  const scanDevices = async () => {
    try {
      const scanHandler = (devices: BleDevice[]) => {
        setBleDevices(devices)
      }
      await startScan(scanHandler, 10000, true)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    scanDevices();
  }, [])

  return { bleDevices, scanDevices }
}

const useConnectDevice = () => {
  const connectDevice = async (address: string) => {
    try {
      await connect(address, null, true)
    } catch (error) {
      console.log(error)
    }
  }
  return { connectDevice }
}

export { useScanDevices, useConnectDevice }
