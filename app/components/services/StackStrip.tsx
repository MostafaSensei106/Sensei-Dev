"use client";

import { Fragment } from "react";
import { PORTFOLIO_DATA } from "@/app/core/config/portfolio";

export default function StackStrip() {
  const groups = PORTFOLIO_DATA.stack;

  const Row = ({ hidden }: { hidden?: boolean }) => (
    <div className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {groups.map((g) => (
        <Fragment key={g.id}>
          <span className="mx-5 flex items-center gap-3">
            <span className="brush-jp text-xl text-accent" lang="ja">
              {g.japanese}
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-tertiary">
              {g.title}
            </span>
          </span>
          {g.items.map((item) => (
            <span key={`${g.id}-${item}`} className="flex items-center">
              <span className="px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-white bg-tertiary/15 border border-tertiary/50 hover:bg-accent/15 hover:border-accent/60 hover:text-accent transition-colors">
                {item}
              </span>
              <span className="mx-3 inline-block h-1.5 w-1.5 rotate-45 bg-accent" aria-hidden="true" />
            </span>
          ))}
        </Fragment>
      ))}
    </div>
  );

  return (
    <section aria-label="Tech stack" className="relative py-10 border-y border-tertiary/20 bg-tertiary/[0.04] overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-tertiary to-accent"
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto px-6 md:px-20 mb-6 flex flex-wrap items-center gap-4">
        <div className="w-8 h-[2px] bg-accent" aria-hidden="true" />
        <span className="font-mono text-[10px] font-bold tracking-[0.35em] uppercase text-tertiary">
          Stack // 技術
        </span>
        <span className="brush-jp text-lg text-accent" lang="ja">
          技術は刀なり
        </span>
        <span className="font-mono text-[10px] text-white/40 tracking-widest hidden lg:inline">
          Flutter • Dart • Kotlin • Go Gin • Spring Boot • Rust • Android Native
        </span>
      </div>
      <div className="stack-marquee-mask relative overflow-hidden" role="presentation">
        <div className="stack-marquee">
          <Row />
          <Row hidden />
        </div>
      </div>
      <p className="sr-only">
        {groups.map((g) => `${g.title}: ${g.items.join(", ")}`).join(". ")}
      </p>
    </section>
  );
}
