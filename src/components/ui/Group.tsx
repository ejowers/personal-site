import React from "react";
import { cn } from "@/lib/utils";

const Group = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-row w-fit justify-start", className)}>
      {children}
    </div>
  );
};

export default Group;
