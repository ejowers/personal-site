import Image from "next/image";
import React from "react";

const ProjectsPage = () => {
  return (
    <div className="relative w-full h-full">
      <Image
        src="/blobs/blob-1.svg"
        className="floating-bg-img img-1"
        alt="leaf 1"
        width={100}
        height={100}
      />
    </div>
  );
};

export default ProjectsPage;
