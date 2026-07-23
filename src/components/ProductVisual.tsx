import { RoofManagerVisual } from './RoofManagerVisual'
import type { PortfolioProduct } from '../content/types'

const RoofManagerCompactVisual = () => (
  <div className="relative flex h-72 flex-col overflow-hidden rounded-[2rem] border border-accentDark/15 bg-surface p-5 shadow-soft" aria-label="Roof Manager product interface preview">
    <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-accentSoft to-transparent" />
    <div className="relative flex items-end justify-between border-b border-line pb-4">
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-accentDark">Roof Manager</p>
        <p className="mt-1 text-xl font-semibold">Job pipeline</p>
      </div>
      <span className="rounded-full bg-canvas px-3 py-1 text-xs font-semibold text-muted">12 active</span>
    </div>
    <div className="relative mt-4 grid flex-1 grid-cols-3 gap-2">
      {[
        ['Signed', '4'],
        ['Scheduled', '3'],
        ['Invoice', '5'],
      ].map(([phase, count], index) => (
        <div key={phase} className="flex flex-col justify-between rounded-2xl border border-line bg-canvas p-3">
          <div>
            <div className="flex items-center justify-between gap-2">
              <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted">{phase}</p>
              <span className="h-2 w-2 shrink-0 rounded-full bg-accent" />
            </div>
            <p className="mt-2 text-2xl font-semibold">{count}</p>
          </div>
          <div className={index === 1 ? 'rounded-xl bg-accentDark px-2 py-2 text-[11px] font-semibold text-canvas' : 'rounded-xl bg-surface px-2 py-2 text-[11px] font-semibold text-accentDark'}>
            {index === 0 ? 'Review files' : index === 1 ? 'Build ready' : 'Send invoice'}
          </div>
        </div>
      ))}
    </div>
  </div>
)

const ClosetVisual = ({ compact }: { compact: boolean }) => (
  <div className={`relative overflow-hidden rounded-[2rem] bg-[#efe7df] p-5 shadow-soft ${compact ? 'flex h-72 items-center' : ''}`} aria-label="Closet App interface preview">
    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#d6b9a7]/60 blur-2xl" />
    <div className="relative mx-auto max-w-sm overflow-hidden rounded-[1.75rem] border border-[#d6c8bd] bg-[#fffaf5] p-4 shadow-[0_18px_45px_rgb(87_61_47_/_0.14)]">
      <div className="flex items-end justify-between border-b border-[#e8ddd4] pb-4">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#8b6553]">Closet App</p>
          <p className="mt-1 text-xl font-semibold text-[#3a2b24]">My Closet</p>
        </div>
        <span className="rounded-full bg-[#3a2b24] px-3 py-1 text-xs font-semibold text-white">+ Add item</span>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {[
          ['#c7d4cd', 'Tops'],
          ['#d7b7aa', 'Layers'],
          ['#9eaba4', 'Bottoms'],
          ['#d9c9a7', 'Shoes'],
          ['#b9a7a0', 'Favorites'],
          ['#d7d2c7', 'More'],
        ].slice(0, compact ? 3 : 6).map(([color, label], index) => (
          <div key={label} className="overflow-hidden rounded-2xl bg-white p-2">
            <div className="relative h-20 rounded-xl" style={{ backgroundColor: color }}>
              <div className="absolute inset-x-1/4 top-3 h-12 rounded-t-[45%] rounded-b-lg border-2 border-white/70" />
              {index === 3 && <div className="absolute inset-x-4 bottom-3 h-4 rounded-full border-2 border-white/70" />}
            </div>
            <p className="mt-2 text-center text-[11px] font-semibold text-[#665249]">{label}</p>
          </div>
        ))}
      </div>
      {!compact && <div className="mt-4 rounded-2xl bg-[#3a2b24] px-4 py-3 text-center text-sm font-semibold text-white">Find outfits</div>}
    </div>
  </div>
)

const MeegVisual = ({ compact }: { compact: boolean }) => (
  <div className={`relative overflow-hidden rounded-[2rem] bg-[#111520] p-5 shadow-soft ${compact ? 'flex h-72 items-center' : ''}`} aria-label="Meeg Fitness Pal interface preview">
    <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-[#6398f7]/25 blur-3xl" />
    <div className="relative mx-auto max-w-sm overflow-hidden rounded-[1.75rem] border border-[#343947] bg-[#202430] p-4 text-white shadow-[0_18px_45px_rgb(0_0_0_/_0.28)]">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8f96a8]">Meeg</p>
          <p className="mt-1 text-xl font-black">Today</p>
        </div>
        <span className="rounded-full bg-[#25334a] px-3 py-1 text-xs font-bold text-[#8bb4ff]">7 day streak</span>
      </div>
      <div className="mt-4 rounded-2xl border border-[#343947] bg-[#252934] p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-[#aab0bd]">Calories remaining</p>
            <p className="mt-1 text-3xl font-black">684</p>
          </div>
          <div className="grid h-16 w-16 place-items-center rounded-full border-[7px] border-[#6398f7] text-xs font-bold">66%</div>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
          {['Protein', 'Carbs', 'Fat'].map((macro, index) => (
            <div key={macro} className="rounded-xl bg-[#111520] px-2 py-3">
              <p className="font-bold">{[92, 146, 48][index]}g</p>
              <p className="mt-1 text-[#8f96a8]">{macro}</p>
            </div>
          ))}
        </div>
      </div>
      {!compact && (
        <div className="mt-3 grid grid-cols-[1fr_auto] gap-3">
          <div className="rounded-2xl border border-[#343947] bg-[#252934] p-4">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8f96a8]">Next meal</p>
            <p className="mt-2 font-bold">Log lunch</p>
          </div>
          <div className="grid place-items-center rounded-2xl bg-[#6398f7] px-5 text-center text-sm font-black text-[#08111f]">AI<br />Track</div>
        </div>
      )}
    </div>
  </div>
)

export const ProductVisual = ({ visual, compact = false }: { visual: PortfolioProduct['visual']; compact?: boolean }) => {
  if (visual === 'roof-manager') return compact ? <RoofManagerCompactVisual /> : <RoofManagerVisual />
  if (visual === 'closet-app') return <ClosetVisual compact={compact} />
  return <MeegVisual compact={compact} />
}
