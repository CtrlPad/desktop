import { Status } from "@/components/ui/status";
import { useIsConnected } from "@/hooks/use-bluetooth";

export default function Statusbar() {
  const connected = useIsConnected();

  return (
    <div className="fixed bottom-0 z-100 flex h-8 items-center justify-start px-4 md:peer-data-[state=expanded]:left-(--sidebar-width)">
      <div className="flex flex-row items-center text-sm space-x-1">
        <Status className={connected ? "bg-green-400" : "bg-red-500"} />
        <p>{connected ? "Connected to CtrlPad" : "No device connected"}</p>
      </div>
    </div>
  );
}
