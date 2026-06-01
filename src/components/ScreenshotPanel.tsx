"use client";

import { useState } from "react";
import type { Project } from "@/data/content";

// Shows the real screenshot if it loads; otherwise falls back to a clean
// placeholder frame. So you can just drop a PNG into /public/projects/ and it
// appears automatically — no code change needed.
export function ScreenshotPanel({ project }: { project: Project }) {
  const [failed, setFailed] = useState(false);
  const showImage = project.image && !failed;

  return (
    <div className="card-glow lift-edge overflow-hidden rounded-xl border border-hairline bg-surface-1">
      {showImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={project.image}
          alt={`${project.name} screenshot`}
          className="aspect-[16/10] w-full object-cover"
          style={{ objectPosition: project.objectPosition ?? "top" }}
          onError={() => setFailed(true)}
        />
      ) : (
        <PlaceholderFrame label={project.name} />
      )}
    </div>
  );
}

function PlaceholderFrame({ label }: { label: string }) {
  return (
    <div className="relative flex aspect-[16/10] w-full items-center justify-center bg-surface-2">
      {/* mock window chrome */}
      <div className="absolute left-4 top-4 flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-hairline-strong" />
        <span className="h-2.5 w-2.5 rounded-full bg-hairline-strong" />
        <span className="h-2.5 w-2.5 rounded-full bg-hairline-strong" />
      </div>
      <span className="font-mono text-sm text-ink-tertiary">{label}</span>
    </div>
  );
}
