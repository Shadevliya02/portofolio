import { cn } from "@/lib/utils";
import type { BeforeAfterExample } from "@/content/types";

function MiniTable({
  label,
  columns,
  rows,
  tone,
}: {
  label: string;
  columns: string[];
  rows: string[][];
  tone: "before" | "after";
}) {
  return (
    <div className="min-w-0 flex-1">
      <p
        className={cn(
          "mb-2 text-xs font-semibold uppercase tracking-wide",
          tone === "before" ? "text-ink-muted" : "text-accent",
        )}
      >
        {label}
      </p>
      <div className="overflow-x-auto rounded-xl border border-border">
        <table className="w-full min-w-[420px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-bg-alt">
              {columns.map((col) => (
                <th key={col} scope="col" className="px-3 py-2 font-semibold text-ink">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-b border-border last:border-0">
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="px-3 py-2 text-ink-muted">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function BeforeAfterTable({ example }: { example: BeforeAfterExample }) {
  return (
    <div>
      <div className="flex flex-col gap-6 md:flex-row">
        <MiniTable label="Before" columns={example.columns} rows={example.before} tone="before" />
        <MiniTable label="After" columns={example.columns} rows={example.after} tone="after" />
      </div>
      <p className="mt-4 text-sm italic text-ink-muted">{example.note}</p>
    </div>
  );
}
