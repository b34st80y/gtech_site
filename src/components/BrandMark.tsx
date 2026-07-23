export const BrandMark = ({ className = 'h-10 w-10' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" role="img" aria-label="GTech">
    <defs>
      <linearGradient id="gtech-mark-bg" x1="10" x2="55" y1="9" y2="56" gradientUnits="userSpaceOnUse">
        <stop stopColor="#185352" />
        <stop offset="1" stopColor="#073d3d" />
      </linearGradient>
      <linearGradient id="gtech-mark-t" x1="25" x2="44" y1="26" y2="46" gradientUnits="userSpaceOnUse">
        <stop stopColor="#24957f" />
        <stop offset="1" stopColor="#1f7e6b" />
      </linearGradient>
    </defs>
    <rect width="64" height="64" rx="12" fill="url(#gtech-mark-bg)" />
    <path
      fill="#f5f0e7"
      d="M35.6 49H25.2c-4.4 0-8.1-1.4-10.9-4.3C11.4 41.8 10 38.1 10 33.5v-3c0-4.6 1.4-8.3 4.3-11.2C17.1 16.4 20.8 15 25.2 15H49v7H25.5c-2.4 0-4.3.8-5.9 2.4-1.5 1.6-2.3 3.7-2.3 6.2v2.8c0 2.6.8 4.7 2.3 6.3 1.6 1.6 3.5 2.4 5.9 2.4h10.1V49Z"
    />
    <path fill="url(#gtech-mark-t)" d="M24.5 28h25v7H38.6v14h-7.1V35h-7v-7Z" />
    <path fill="#f5f0e7" d="M41.7 37.2H50v5.2h-8.3v-5.2Zm0 7.1H50V49h-8.3v-4.7Z" />
  </svg>
)
