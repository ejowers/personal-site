import React from "react";
import Stack from "./Stack";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Stack className="w-full px-8 sm:px-20 pt-24 justify-start">
      {children}
    </Stack>
  );
};

export default PageLayout;
