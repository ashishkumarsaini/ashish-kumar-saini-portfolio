import { VisitorsWaitingBadge } from "../components/visitors-waiting-badge";

export default function Home() {
  return (
    <section className="relative overflow-hidden h-screen">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900" />
        <div
          className="absolute -top-24 left-1/2 h-112 w-md -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,var(--color-indigo-200),transparent_55%)] blur-3xl dark:bg-[radial-gradient(circle_at_center,var(--color-indigo-500),transparent_60%)]/25"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-24 left-1/2 h-112 w-md -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,var(--color-fuchsia-200),transparent_55%)] blur-3xl dark:bg-[radial-gradient(circle_at_center,var(--color-fuchsia-500),transparent_60%)]/20"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(var(--color-slate-900)_1px,transparent_1px)] bg-size-[18px_18px] dark:opacity-[0.08] dark:bg-[radial-gradient(var(--color-slate-100)_1px,transparent_1px)]"
          aria-hidden="true"
        />
      </div>

      <div className="mx-auto flex min-h-[calc(100dvh-8rem)] w-full max-w-3xl items-center">
        <div className="w-full rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur sm:p-10 dark:border-slate-800 dark:bg-slate-950/40">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-500/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
              </span>
              Maintenance mode
            </span>
          </div>

          <h1 className="mt-6 text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-50">
            We’ll be back soon.
          </h1>

          <p className="mt-3 text-pretty text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
            The site is currently under maintenance. We’re making a few improvements and will be online again shortly.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white/60 p-4 dark:border-slate-800 dark:bg-slate-950/30">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 rounded-lg border border-slate-200 bg-white p-2 dark:border-slate-800 dark:bg-slate-950">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5 text-slate-800 dark:text-slate-100"
                    aria-hidden="true"
                  >
                    <path
                      d="M9 12l2 2 4-4"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">What’s happening</p>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                    Performance + content improvements behind the scenes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-8 text-xs text-slate-500 dark:text-slate-400">
            Thanks for your patience.
          </p>
        </div>
      </div>

      <VisitorsWaitingBadge />
    </section>
  );
}
