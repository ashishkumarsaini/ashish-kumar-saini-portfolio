'use client';

import { useEffect } from "react";

let defaultCount = 32;

export function VisitorsWaitingBadge() {

  useEffect(() => {
    defaultCount = defaultCount + 1;
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-2 text-xs font-medium text-slate-800 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-950/60 dark:text-slate-100">
        <span className="inline-flex items-center rounded-full bg-slate-900 px-2 py-0.5 text-[11px] font-semibold text-white dark:bg-slate-100 dark:text-slate-900">
          {defaultCount}
        </span>
        <span className="whitespace-nowrap">Visitors waiting</span>
      </div>
    </div>
  );
}

