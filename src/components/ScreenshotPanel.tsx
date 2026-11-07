"use client";

import { useState } from "react";
import type { Project } from "@/data/content";

// Shows the real screenshot if it loads; otherwise a plain ruled placeholder.
// Drop a PNG into /public/projects/ and it appears with no code change.
export function ScreenshotPanel({ project }: { project: Project }) {
  const [failed, setFailed] = useState(false);
  const showImage = project.image && !failed;

  return (
    <div className="border border-rule bg-card p-2.5">
      {showImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={project.image}
          alt={`${project.name} screenshot`}
          loading="lazy"
          className="aspect-[16/10] w-full border border-rule object-cover"
          style={{ objectPosition: project.objectPosition ?? "top" }}
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="flex aspect-[16/10] w-full items-center justify-center border border-rule bg-paper-deep">
          <span className="font-mono text-xs uppercase tracking-[0.1em] text-ink-subtle">{project.name}</span>
        </div>
      )}
    </div>
  );
}
