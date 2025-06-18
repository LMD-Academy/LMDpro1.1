"use client";

import { cn } from "@/lib/utils";

export default function AnimatedGradientBackground() {
  return (
    <div
      className={cn(
        "fixed inset-0 -z-10 animated-liquid-gradient"
      )}
      aria-hidden="true"
    />
  );
}
