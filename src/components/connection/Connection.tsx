import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"
import {
  Table, TableBody, TableCaption, TableCell, TableRow
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { BluetoothConnected, Bluetooth } from "lucide-react"
import { useScanDevices } from "@/hooks/use-bluetooth"

function Connection() {
  const { bleDevices } = useScanDevices()

  return (
    <div className="flex w-full h-screen items-center justify-center">
      <Card className="flex w-4xl">
        <CardHeader>
          <CardTitle>Connect via Bluetooth with you ctrlPad</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableCaption>Found {bleDevices.length} devices in 10 seconds.</TableCaption>
            <TableBody>
              {bleDevices.map((device) => (
                <TableRow>
                  <TableCell className="w-[10px]"><Bluetooth size={18} /></TableCell>
                  <TableCell>{device.name}</TableCell>
                  <TableCell className="w-[10px]">{device.rssi}</TableCell>
                  <TableCell className="w-[10px]"><Button><BluetoothConnected /></Button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

export default Connection
