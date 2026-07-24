/**
 * Sailboat for the landing page. Drawn rather than photographed so it stays
 * crisp at any size and keeps the palette under control — it is meant to sit
 * just barely above the black, not to be looked at directly.
 *
 * Swapping in a raster image later means replacing this component; nothing
 * else in Landing depends on it being an SVG.
 */
export const Sailboat = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 900 620"
    preserveAspectRatio="xMidYMid meet"
    aria-hidden="true"
    focusable="false"
  >
    <defs>
      <linearGradient id="uwSail" x1="0" y1="0" x2="0.35" y2="1">
        <stop offset="0%" stopColor="#242424" />
        <stop offset="100%" stopColor="#0e0e0e" />
      </linearGradient>
      <linearGradient id="uwSailAft" x1="1" y1="0" x2="0.4" y2="1">
        <stop offset="0%" stopColor="#1e1e1e" />
        <stop offset="100%" stopColor="#0c0c0c" />
      </linearGradient>
      <radialGradient id="uwHorizon" cx="50%" cy="62%" r="62%">
        <stop offset="0%" stopColor="#131313" />
        <stop offset="100%" stopColor="#000000" />
      </radialGradient>
    </defs>

    {/* barest lift off the black so the hull has something to sit against */}
    <rect x="0" y="0" width="900" height="620" fill="url(#uwHorizon)" />

    {/* mast and boom */}
    <path d="M447 84 h10 v344 h-10 Z" fill="#262626" />
    <path d="M300 410 h157 v9 H300 Z" fill="#212121" />

    {/* mainsail, aft of the mast */}
    <path
      d="M447 100 L447 410 L302 410 C352 326 412 210 447 100 Z"
      fill="url(#uwSailAft)"
    />
    {/* jib, forward of the mast */}
    <path
      d="M459 138 L459 410 L592 410 C560 326 510 218 459 138 Z"
      fill="url(#uwSail)"
    />

    {/* hull */}
    <path
      d="M266 424 L638 424 C606 472 540 496 452 496 C364 496 304 472 266 424 Z"
      fill="#1c1c1c"
    />
    {/* waterline catching the last of the light */}
    <path d="M266 424 L638 424 v6 H266 Z" fill="#2a2a2a" opacity="0.7" />

    {/* sea */}
    <g stroke="#141414" strokeLinecap="round" fill="none">
      <path d="M120 512 h180" strokeWidth="3" />
      <path d="M600 512 h190" strokeWidth="3" />
      <path d="M210 546 h250" strokeWidth="2.5" opacity="0.8" />
      <path d="M520 546 h190" strokeWidth="2.5" opacity="0.8" />
      <path d="M300 578 h300" strokeWidth="2" opacity="0.6" />
    </g>
  </svg>
);

export default Sailboat;
