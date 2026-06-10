import { useEffect, useState } from "react";
import { startScan, type BleDevice } from "@mnlphlp/plugin-blec"

const useScanDevices = () => {
  const [bleDevices, setBleDevices] = useState<BleDevice[]>([])

  useEffect(() => {
    const fetchDevices = async () => {
      try {
        const scanHandler = (devices: BleDevice[]) => {
          console.log(devices)
          setBleDevices(devices)
        }
        await startScan(scanHandler, 10000, true)
      } catch (error) {
        console.log(error)
      }
    }
    fetchDevices();
  }, [])

  return { bleDevices }
}

export { useScanDevices }
