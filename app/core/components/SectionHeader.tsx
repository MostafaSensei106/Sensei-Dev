import type { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow: string;
  japanese?: string;
  titleA: string;
  titleB: string;
  description?: string;
  /** Secondary log line under the title (mono + dot). */
  subLabel?: string;
  /** "lg" is the oversized hero-of-section treatment used by feature sections. */
  size?: "default" | "lg";
  /** Right-hand slot: counters, filters, badges. Implies a split layout. */
  aside?: ReactNode;
  /** Kept for explicit control when there is no aside. */
  align?: "left" | "split";
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  japanese,
  titleA,
  titleB,
  description,
  subLabel,
  size = "default",
  aside,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  const split = align === "split" || Boolean(aside);

  const titleSize =
    size === "lg"
      ? "text-5xl md:text-7xl xl:text-8xl leading-[0.9]"
      : "text-4xl md:text-6xl lg:text-7xl leading-[0.9]";

  return (
    <div
      className={[
        "relative mb-16 md:mb-20",
        split
          ? "flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8"
          : "max-w-3xl",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-7 w-[60%] max-w-[420px]"
      >
        <div className="speed-lines absolute inset-0 opacity-70" />
        <div className="absolute bottom-0 left-0 h-px w-full bg-primary/35" />
      </div>

      <div className={split ? "max-w-3xl" : undefined}>
        <div className="relative flex items-center gap-4 mb-6">
          <div className="w-12 h-[2px] bg-primary" aria-hidden="true" />
          <span className="eyebrow text-primary">{eyebrow}</span>
          {japanese ? (
            <span
              className="jp-eyebrow text-[11px] text-foreground/30 uppercase hidden sm:inline"
              lang="ja"
            >
              {japanese}
            </span>
          ) : null}
        </div>

        <h2
          className={`font-display font-black tracking-tighter uppercase ${titleSize}`}
        >
          <span className="text-foreground">{titleA}</span> <br />
          <span className="text-primary italic">{titleB}</span>
        </h2>

        {subLabel ? (
          <div className="mt-6 flex items-center gap-3">
            <div className="w-2 h-2 bg-primary" aria-hidden="true" />
            <span className="eyebrow-sm text-foreground/30">{subLabel}</span>
          </div>
        ) : null}

        {description ? (
          <p className="mt-5 text-base md:text-lg text-foreground/60 font-light leading-relaxed max-w-2xl">
            {description}
          </p>
        ) : null}
      </div>

      {aside ? (
        <div className="shrink-0">
          {aside}
        </div>
      ) : null}
    </div>
  );
}
