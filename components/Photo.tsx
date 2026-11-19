"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

// Fills its nearest `relative` parent. Falls back to a navy gradient if a photo fails to load.
export default function Photo({ src, alt, className = "", priority = false, sizes = "100vw" }: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-navy-700 to-navy-950" />;
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  );
}
