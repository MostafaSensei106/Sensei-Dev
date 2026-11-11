"use client";

import type { ReactNode } from "react";
import { useContributionStats } from "@/app/core/api/contributions";
import { CountUp } from "@/app/core/components/CountUp";
import { ContributionGraph } from "./ContributionGraph";

export default function ContributionActivity({ children, username }: { children: ReactNode; username: string }) {
  const stats = useContributionStats(username);

  return (
    <>
      <div className="mb-10 flex flex-wrap items-center gap-4">
        <div className="w-12 h-[2px] bg-primary" aria-hidden="true" />
        <span className="text-primary text-[11px] font-mono font-bold tracking-[0.35em] uppercase">
          Upstream // Contributed
        </span>
        <span className="brush-jp text-lg text-foreground/30" lang="ja">貢献</span>
        {stats.status === "ready" ? (
          <span className="ml-auto flex items-center gap-3 border border-foreground/10 bg-surface/60 px-4 py-2">
            <span className="font-mono text-lg font-black text-accent tabular-nums">
              <CountUp target={stats.total} />
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-foreground/50">
              commits // last year
            </span>
          </span>
        ) : null}
      </div>
      {children}
      <div className="mt-6"><ContributionGraph stats={stats} username={username} /></div>
    </>
  );
}
