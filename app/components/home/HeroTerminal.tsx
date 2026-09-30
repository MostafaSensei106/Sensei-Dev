"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

const SCRIPT = [
  { cmd: "flutter build apk --release", out: "✓ apk assembled — 38.2MB, release-ready" },
  { cmd: "go run ./cmd/api --port 8080", out: "✓ listening on :8080 — p99 6ms" },
  { cmd: "cargo test -p dicom-core --release", out: "✓ 214 passed — 0 failed" },
];

const wait = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

function WindowFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full bg-black/70 border border-white/10 backdrop-blur-sm">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/10">
        <span className="h-2.5 w-2.5 rounded-full bg-primary" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-tertiary" aria-hidden="true" />
        <span className="ml-3 font-mono text-[9px] tracking-[0.3em] text-white/35 uppercase">
          sensei — fish
        </span>
        <span className="brush-jp ml-auto text-sm text-white/30" lang="ja" aria-hidden="true">
          稼働中
        </span>
      </div>
      <div className="px-4 py-3.5 font-mono text-[11px] md:text-xs leading-[1.9] min-h-[148px]">
        {children}
      </div>
    </div>
  );
}

function Prompt() {
  return <span className="text-primary font-bold">❯ </span>;
}

export default function HeroTerminal() {
  const reduceMotion = useReducedMotion();
  const [done, setDone] = useState<{ cmd: string; out: string }[]>([]);
  const [typing, setTyping] = useState("");

  useEffect(() => {
    if (reduceMotion) return;
    let cancelled = false;

    const run = async (startIdx: number) => {
      const item = SCRIPT[startIdx % SCRIPT.length];
      for (let i = 1; i <= item.cmd.length; i++) {
        if (cancelled) return;
        setTyping(item.cmd.slice(0, i));
        await wait(28 + Math.random() * 48);
      }
      if (cancelled) return;
      await wait(550);
      if (cancelled) return;
      setDone((prev) => [...prev.slice(-1), item]);
      setTyping("");
      await wait(1800);
      if (cancelled) return;
      run(startIdx + 1);
    };

    run(0);
    return () => {
      cancelled = true;
    };
  }, [reduceMotion]);

  if (reduceMotion) {
    return (
      <WindowFrame>
        {SCRIPT.map((s) => (
          <div key={s.cmd}>
            <div>
              <Prompt />
              <span className="text-white/85">{s.cmd}</span>
            </div>
            <div className="text-tertiary/80">{s.out}</div>
          </div>
        ))}
      </WindowFrame>
    );
  }

  return (
    <WindowFrame>
      <span className="sr-only">
        Terminal demo cycling through Flutter, Go and Rust commands with successful outputs.
      </span>
      <div aria-hidden="true">
        {done.map((d) => (
          <div key={d.cmd}>
            <div>
              <Prompt />
              <span className="text-white/40">{d.cmd}</span>
            </div>
            <div className="text-tertiary/80">{d.out}</div>
          </div>
        ))}
        <div>
          <Prompt />
          <span className="text-white/90">{typing}</span>
          <span className="ml-0.5 inline-block h-[13px] w-[7px] translate-y-[2px] bg-primary animate-pulse" />
        </div>
      </div>
    </WindowFrame>
  );
}
