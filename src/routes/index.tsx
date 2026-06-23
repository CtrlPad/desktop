import { createFileRoute } from "@tanstack/react-router";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ButtonGrid } from "@/components/index/ButtonGrid";
import { Button } from "@/components/ui/button";
import { ArrowUpIcon } from "lucide-react";
import { useSendLayout } from "@/hooks/use-bluetooth";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const { sendLayout } = useSendLayout();

  return (
    <>
      <SidebarTrigger />
      <div className="relative flex w-full h-screen items-center justify-center">
        <ButtonGrid />
        <Button
          className="absolute bottom-6 right-6"
          size="lg"
          onClick={() => sendLayout()}
        >
          <span>Upload to ctrlPad</span>
          <ArrowUpIcon />
        </Button>
      </div>
    </>
  );
}
