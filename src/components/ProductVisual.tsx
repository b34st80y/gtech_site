import {
  CalendarDays,
  Flame,
  Home,
  Plus,
  Search,
  Shirt,
  SlidersHorizontal,
  UserRound,
  Utensils,
} from 'lucide-react'
import { RoofManagerVisual } from './RoofManagerVisual'
import type { PortfolioProduct } from '../content/types'

const closetSections = [
  { label: 'Tops', count: 6, colors: ['#2cb9ed', '#d35b66', '#54545a'], type: 'top' },
  { label: 'Bottoms', count: 3, colors: ['#273b62', '#4e78a6', '#333137'], type: 'bottom' },
  { label: 'Outerwear', count: 1, colors: ['#262324'], type: 'top' },
]

const Garment = ({ color, type }: { color: string; type: string }) => type === 'top' ? (
  <Shirt className="h-12 w-12 drop-shadow-[0_5px_4px_rgb(0_0_0_/_0.35)]" style={{ color, fill: color }} strokeWidth={1.2} />
) : (
  <div className="relative h-12 w-10 drop-shadow-[0_5px_4px_rgb(0_0_0_/_0.35)]">
    <div className="absolute inset-x-1 top-1 h-3 rounded-t bg-current" style={{ color }} />
    <div className="absolute bottom-0 left-1 top-3 w-[15px] origin-top -skew-x-6 rounded-b bg-current" style={{ color }} />
    <div className="absolute bottom-0 right-1 top-3 w-[15px] origin-top skew-x-6 rounded-b bg-current" style={{ color }} />
  </div>
)

const ClosetVisual = ({ compact }: { compact: boolean }) => (
  <div
    className={`group relative overflow-hidden rounded-[2rem] bg-[#101010] text-[#f5f1f7] shadow-soft ${compact ? 'h-72' : 'min-h-[32rem]'}`}
    aria-label="Closet AI interface preview"
  >
    <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#713fd1]/20 blur-3xl" />
    <div className={`relative mx-auto flex h-full max-w-[360px] flex-col overflow-hidden bg-[#101010] transition-transform duration-300 group-hover:-translate-y-1 ${compact ? 'px-3 pt-3' : 'px-4 pt-5'}`}>
      <div className="text-center">
        <p className={`${compact ? 'text-base' : 'text-xl'} font-medium`}>Wardrobe</p>
      </div>

      <div className="mt-3 grid grid-cols-2 border-b border-[#4a4650] text-center text-[10px] font-semibold">
        <div className="relative pb-2 text-[#d0a9ff] after:absolute after:inset-x-2 after:-bottom-px after:h-0.5 after:rounded-full after:bg-[#cda2ff]">Clothing Items</div>
        <div className="pb-2 text-[#aaa5ad]">Outfits</div>
      </div>

      <div className="mt-2.5 flex gap-2">
        <div className="flex h-8 flex-1 items-center gap-2 rounded-full bg-[#1d1b1e] px-3 text-[10px] text-[#c7c2cb]">
          <Search className="h-3.5 w-3.5" />
          <span>Search your wardrobe</span>
        </div>
        <button type="button" aria-label="Filter wardrobe" className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#1d1b1e] text-[#c7c2cb]">
          <SlidersHorizontal className="h-4 w-4" />
        </button>
      </div>

      <div className={`mt-3 min-h-0 flex-1 overflow-hidden ${compact ? 'space-y-2.5' : 'space-y-4'}`}>
        {closetSections.slice(0, compact ? 2 : 3).map((section) => (
          <section key={section.label}>
            <h3 className="text-[11px] font-bold">{section.label} <span className="ml-1 font-normal text-[#747077]">({section.count})</span></h3>
            <div className="mt-1.5 grid grid-cols-3 gap-2 border-b border-[#39363e] pb-2">
              {section.colors.map((color, index) => (
                <div key={`${section.label}-${index}`} className={`grid place-items-center rounded-xl bg-[#111112] shadow-[inset_0_0_0_1px_rgb(255_255_255_/_0.015)] ${compact ? 'h-[58px]' : 'h-[80px]'}`}>
                  <Garment color={color} type={section.type} />
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <button type="button" aria-label="Add clothing item" className="absolute bottom-12 right-3 grid h-10 w-10 place-items-center rounded-2xl bg-[#713fd1] text-white shadow-[0_8px_20px_rgb(0_0_0_/_0.4)]">
        <Plus className="h-5 w-5" />
      </button>

      <div className="grid h-11 shrink-0 grid-cols-4 bg-[#101010] text-[#98949b]">
        {[
          [Home, 'Home'],
          [Shirt, 'Wardrobe'],
          [CalendarDays, 'Calendar'],
          [UserRound, 'Profile'],
        ].map(([Icon, label]) => {
          const NavIcon = Icon as typeof Home
          const selected = label === 'Wardrobe'
          return (
            <div key={label as string} className={`flex flex-col items-center justify-center gap-0.5 text-[7px] ${selected ? 'text-[#713fd1]' : ''}`}>
              <NavIcon className="h-4 w-4" strokeWidth={2.4} />
              <span>{label as string}</span>
            </div>
          )
        })}
      </div>
    </div>
  </div>
)

const MeegVisual = ({ compact }: { compact: boolean }) => (
  <div
    className={`group relative overflow-hidden rounded-[2rem] bg-[#111520] p-4 shadow-soft ${compact ? 'h-72' : 'min-h-[32rem]'}`}
    aria-label="Meeg Fitness Pal interface preview"
  >
    <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-[#6398f7]/20 blur-3xl" />
    <div className={`relative mx-auto overflow-hidden bg-[#111520] text-white transition-transform duration-300 group-hover:-translate-y-1 ${compact ? 'max-w-[310px]' : 'max-w-[360px]'}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#8f96a8]">Thursday, July 23</p>
          <p className="mt-0.5 text-xl font-black">Today</p>
        </div>
        <div className="flex items-center gap-1.5 rounded-full bg-[#26344d] px-3 py-1.5 text-[10px] font-bold text-[#8bb4ff]">
          <Flame className="h-3.5 w-3.5" fill="currentColor" />
          7 day streak
        </div>
      </div>

      <div className="mt-3 flex justify-between gap-1.5">
        {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => (
          <div key={`${day}-${index}`} className="flex flex-col items-center gap-1 text-[8px] text-[#8f96a8]">
            <span>{day}</span>
            <span className={`grid h-6 w-6 place-items-center rounded-full font-bold ${index === 3 ? 'bg-[#6ea1ff] text-[#111520]' : 'bg-[#252934] text-[#d9dce4]'}`}>{20 + index}</span>
          </div>
        ))}
      </div>

      <section className="mt-3 rounded-2xl bg-[#252934] px-4 py-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] font-semibold text-[#aab0bd]">Calories</p>
            <p className="mt-0.5 text-lg font-black">1,316 <span className="text-[9px] font-semibold text-[#8f96a8]">of 2,000</span></p>
          </div>
          <p className="text-right text-[9px] text-[#8f96a8]"><span className="block text-base font-black text-white">684</span>remaining</p>
        </div>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#121622]">
          <div className="h-full w-2/3 rounded-full bg-[#6b9dff]" />
        </div>
      </section>

      <section className="relative mt-2.5 grid grid-cols-3 gap-3 rounded-2xl bg-[#252934] px-4 py-3 text-center">
        {[['92g', 'Protein'], ['146g', 'Carbs'], ['48g', 'Fat']].map(([value, label]) => (
          <div key={label}>
            <p className="text-xs font-black">{value}</p>
            <div className="mx-auto mt-1.5 h-1 w-full max-w-14 overflow-hidden rounded-full bg-[#121622]"><div className="h-full w-3/4 rounded-full bg-[#67d982]" /></div>
            <p className="mt-1 text-[8px] text-[#8f96a8]">{label}</p>
          </div>
        ))}
      </section>

      {!compact && (
        <div className="mt-3 space-y-2">
          {['Breakfast', 'Lunch', 'Dinner'].map((meal) => (
            <div key={meal} className="flex h-12 items-center justify-between rounded-xl bg-[#252934] px-4 text-sm font-bold">
              <span className="flex items-center gap-2"><Utensils className="h-4 w-4 text-[#6ea1ff]" />{meal}</span>
              <Plus className="h-4 w-4 text-[#6ea1ff]" />
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
)

export const ProductVisual = ({ visual, compact = false }: { visual: PortfolioProduct['visual']; compact?: boolean }) => {
  if (visual === 'roof-manager') return <RoofManagerVisual compact={compact} />
  if (visual === 'closet-app') return <ClosetVisual compact={compact} />
  return <MeegVisual compact={compact} />
}
