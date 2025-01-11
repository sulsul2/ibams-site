import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="flex items-center justify-center h-full">
      <Image src="/water.png" alt="coming soon" width={800} height={800} />
    </div>
  );
}
