const phases = ['New', 'Signed', 'Insurance', 'Scheduled', 'Invoice']

export const RoofManagerVisual = () => (
  <div className="relative overflow-hidden rounded-[2rem] border border-accentDark/15 bg-surface p-4 shadow-soft" aria-label="Roof Manager product interface preview">
    <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-accentSoft to-transparent" />
    <div className="relative flex items-center justify-between border-b border-line pb-4">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-accentDark">Roof Manager</p>
        <p className="mt-1 text-xl font-semibold">Lifecycle Board</p>
      </div>
      <div className="rounded-full bg-canvas px-3 py-1 text-xs font-semibold text-muted">Action Queue</div>
    </div>

    <div className="relative mt-5 grid gap-3 md:grid-cols-5">
      {phases.map((phase, index) => (
        <div key={phase} className="min-h-28 rounded-2xl border border-line bg-canvas p-3">
          <div className="flex items-center justify-between">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted">{phase}</p>
            <span className="h-2 w-2 rounded-full bg-accent" />
          </div>
          <div className="mt-4 space-y-2">
            <div className="h-3 rounded-full bg-accentDark/12" />
            <div className="h-3 w-2/3 rounded-full bg-accent/20" />
            {index < 3 && <div className="mt-4 rounded-xl bg-surface px-3 py-2 text-xs font-semibold text-accentDark">Next action ready</div>}
          </div>
        </div>
      ))}
    </div>

    <div className="relative mt-4 grid gap-4 md:grid-cols-[1fr_0.8fr]">
      <div className="rounded-2xl border border-line bg-canvas p-4">
        <p className="text-sm font-semibold">Generated invoice</p>
        <div className="mt-4 space-y-3">
          <div className="flex justify-between border-b border-line pb-2 text-sm">
            <span>Roof replacement balance</span>
            <span className="font-semibold">$8,450</span>
          </div>
          <div className="flex justify-between text-sm text-muted">
            <span>Payment status</span>
            <span>Due</span>
          </div>
        </div>
      </div>
      <div className="rounded-2xl border border-accentDark bg-accentDark p-4 text-white">
        <p className="text-sm font-semibold">Recommended action</p>
        <p className="mt-3 text-sm leading-6 text-white/75">Insurance is approved. Schedule the build date.</p>
      </div>
    </div>
  </div>
)
