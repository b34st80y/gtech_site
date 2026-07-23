import { FileText, House, LayoutDashboard, Moon, Plus, Sun, Users } from 'lucide-react'

const lifecycle = [
  ['New Leads', '2'],
  ['Signed', '4'],
  ['Insurance', '1'],
  ['Scheduled', '3'],
]

export const RoofManagerVisual = ({ compact = false }: { compact?: boolean }) => (
  <div
    className={`roof-preview group relative overflow-hidden rounded-[2rem] bg-[rgb(var(--roof-frame))] p-3 shadow-soft ${compact ? 'h-72' : 'min-h-[32rem]'}`}
    aria-label="Roof Manager interface preview"
  >
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgb(29_155_240_/_0.12),transparent_38%)]" />
    <div className="relative mx-auto flex h-full max-w-[660px] overflow-hidden rounded-[1.35rem] border border-[rgb(var(--roof-border))] bg-[rgb(var(--roof-surface))] text-[rgb(var(--roof-ink))] shadow-[0_22px_55px_rgb(15_23_42_/_0.16)] transition-all duration-300 group-hover:-translate-y-1">
      <aside className={`shrink-0 border-r border-[rgb(var(--roof-border))] bg-[rgb(var(--roof-rail))] ${compact ? 'w-[76px] p-2.5' : 'w-36 p-4'}`}>
        <div className="flex items-center gap-2 text-[#1d9bf0]">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[#1d9bf0] text-white"><House className="h-5 w-5" fill="currentColor" /></span>
          {!compact && <span className="text-xs font-bold text-[rgb(var(--roof-ink))]">RoofsChris</span>}
        </div>
        <p className={`mt-1 text-[7px] uppercase tracking-[0.18em] text-[rgb(var(--roof-muted))] ${compact ? 'truncate' : ''}`}>RoofsChris</p>
        <nav className="mt-5 space-y-1 text-[9px] font-semibold">
          {[
            [LayoutDashboard, 'Dashboard', true],
            [Users, 'Clients', false],
            [FileText, 'Templates', false],
          ].map(([Icon, label, active]) => {
            const NavIcon = Icon as typeof House
            return (
              <div key={label as string} className={`flex items-center gap-2 border-l-2 px-2 py-2 ${active ? 'border-[#1d9bf0] bg-[#1d9bf0]/10 text-[rgb(var(--roof-ink))]' : 'border-transparent text-[rgb(var(--roof-muted))]'}`}>
                <NavIcon className="h-3.5 w-3.5 shrink-0" />
                {!compact && <span>{label as string}</span>}
              </div>
            )
          })}
        </nav>
      </aside>

      <div className="min-w-0 flex-1 bg-[rgb(var(--roof-surface))]">
        <header className="flex h-11 items-center justify-between border-b border-[rgb(var(--roof-border))] px-4">
          <h3 className="text-xs font-semibold">Dashboard</h3>
          <span className="grid h-7 w-7 place-items-center rounded-full border border-[rgb(var(--roof-border))] bg-[rgb(var(--roof-soft))]"><Moon className="roof-preview-moon h-3 w-3" /><Sun className="roof-preview-sun hidden h-3 w-3" /></span>
        </header>

        <div className={`${compact ? 'p-3' : 'p-5'}`}>
          <div className="grid grid-cols-3 border-b border-[rgb(var(--roof-border))] pb-3">
            {[['Total Jobs', '12', 'text-slate-900'], ['Active', '10', 'text-emerald-600'], ['Complete', '2', 'text-[#1d9bf0]']].map(([label, value, color], index) => (
              <div key={label} className={`px-3 ${index < 2 ? 'border-r border-[rgb(var(--roof-border))]' : ''}`}>
                <p className="text-[7px] font-semibold uppercase tracking-[0.14em] text-[rgb(var(--roof-muted))]">{label}</p>
                <p className={`mt-1 text-lg font-semibold ${color}`}>{value}</p>
              </div>
            ))}
          </div>

          <div className={`mt-3 grid gap-4 ${compact ? 'grid-cols-[1.55fr_1fr]' : 'grid-cols-[1.6fr_1fr]'}`}>
            <section className="min-w-0">
              <h4 className="border-b border-[rgb(var(--roof-border))] pb-2 text-xs font-semibold">Lifecycle Board</h4>
              <div className={`${compact ? 'mt-2 space-y-1.5' : 'mt-3 space-y-3'}`}>
                {lifecycle.slice(0, compact ? 3 : 4).map(([phase, count], index) => (
                  <div key={phase} className="border-b border-[rgb(var(--roof-border))] pb-1.5">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-[9px] font-semibold"><span className={`h-2 w-2 rounded-sm ${['bg-slate-400', 'bg-[#1d9bf0]', 'bg-amber-500', 'bg-violet-500'][index]}`} />{phase}</span>
                      <span className="text-[8px] text-[rgb(var(--roof-muted))]">{count}</span>
                    </div>
                    {!compact && <p className="mt-1 pl-3.5 text-[8px] text-[rgb(var(--roof-muted))]">{index === 0 ? 'Review new estimate request' : index === 1 ? 'Prepare job documents' : 'No jobs here.'}</p>}
                  </div>
                ))}
              </div>
            </section>

            <section className="min-w-0 border-l border-[rgb(var(--roof-border))] pl-3">
              <h4 className="border-b border-[rgb(var(--roof-border))] pb-2 text-xs font-semibold">Action Queue</h4>
              <div className="py-2">
                <p className="truncate text-[9px] font-semibold">Johnson Residence</p>
                <p className="mt-0.5 text-[7px] text-[rgb(var(--roof-muted))]">Schedule build date</p>
                <div className="mt-2 flex items-center justify-between text-[7px] text-[rgb(var(--roof-muted))]"><span>Insurance</span><span>$8,450</span></div>
              </div>
              <div className="border-t border-[rgb(var(--roof-border))] py-2">
                <p className="truncate text-[9px] font-semibold">Miller Roof</p>
                <p className="mt-0.5 text-[7px] text-[rgb(var(--roof-muted))]">Send invoice</p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <button type="button" aria-label="Create job" className="absolute bottom-3 right-3 flex h-8 items-center gap-1.5 rounded-full bg-[#1d9bf0] px-3 text-[9px] font-semibold text-white shadow-[0_8px_22px_rgb(29_155_240_/_0.35)]">
        <Plus className="h-3.5 w-3.5" /> Create Job
      </button>
    </div>
  </div>
)
