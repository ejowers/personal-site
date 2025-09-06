import { cn } from "@/lib/utils";
import React from "react";

const Stack = ({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  style?: Record<string, any>;
}) => {
  return (
    <div
      className={cn("flex flex-col w-fit justify-start gap-2", className)}
      style={style || {}}
    >
      {children}
    </div>
  );
};

export default Stack;
