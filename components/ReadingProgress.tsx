"use client";

import { useEffect, useState } from "react";

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function updateProgress() {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
      setProgress(Math.min(1, Math.max(0, nextProgress)));
    }

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <div
      className="fixed left-0 top-0 z-50 h-1 bg-signal"
      style={{ width: `${progress * 100}%` }}
      aria-hidden="true"
    />
  );
}
