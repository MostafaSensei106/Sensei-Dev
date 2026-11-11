"use client";

import { useState, type ReactNode } from "react";
import type { WorkType } from "@/app/core/types/portfolio";

const FILTERS: { id: WorkType | "all"; label: string; japanese: string }[] = [
  { id: "all", label: "All", japanese: "全部" },
  { id: "app", label: "Apps", japanese: "アプリ" },
  { id: "backend", label: "Backend", japanese: "バックエンド" },
  { id: "library", label: "Libraries", japanese: "庫" },
];

export default function WorkFilter({ items }: { items: { type: WorkType; card: ReactNode }[] }) {
  const [filter, setFilter] = useState<WorkType | "all">("all");
  const visible = items.filter((item) => filter === "all" || item.type === filter);

  return (
    <>
      <div className="flex flex-wrap gap-3 mb-12" role="group" aria-label="Filter work by type">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            type="button"
            aria-pressed={filter === f.id}
            onClick={() => setFilter(f.id)}
            className={`min-h-11 inline-flex items-center px-5 py-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.2em] border transition-all duration-300 ${filter === f.id
              ? "bg-primary text-white border-primary"
              : "bg-foreground/[0.03] text-foreground/60 border-foreground/10 hover:border-primary/50 hover:text-foreground"}`}
          >
            {f.label} <span className="ml-2 text-[9px] opacity-60" lang="ja">{f.japanese}</span>
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {visible.map(({ card }) => card)}
      </div>
      {visible.length === 0 ? (
        <p className="mt-8 font-mono text-sm text-foreground/40">No items in this filter yet.</p>
      ) : null}
    </>
  );
}
