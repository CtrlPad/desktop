import { cn } from "@/lib/utils";

function Status({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("size-2 rounded-full", className)} {...props} />;
}

export { Status };
