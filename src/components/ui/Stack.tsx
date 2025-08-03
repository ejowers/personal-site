import { cn } from "@/lib/utils";
import React from "react";

const Stack = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col w-fit justify-start", className)}>
      {children}
    </div>
  );
};

export default Stack;
