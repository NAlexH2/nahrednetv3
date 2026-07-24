/**
 * Sailboat for the landing page. Drawn rather than photographed so it stays
 * crisp at any size and keeps the palette under control — it is meant to sit
 * just barely above the black, not to be looked at directly.
 *
 * Deliberately flat fills, no gradients: Firefox bands large soft gradients
 * badly on dark backgrounds, which turned the previous version into visible
 * rings rather than a fade.
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
    {/* mast and boom */}
    <path d="M447 84 h10 v344 h-10 Z" fill="#141414" />
    <path d="M300 410 h157 v9 H300 Z" fill="#121212" />

    {/* mainsail, aft of the mast */}
    <path d="M447 100 L447 410 L302 410 C352 326 412 210 447 100 Z" fill="#0b0b0b" />
    {/* jib, forward of the mast */}
    <path d="M459 138 L459 410 L592 410 C560 326 510 218 459 138 Z" fill="#0e0e0e" />

    {/* hull */}
    <path
      d="M266 424 L638 424 C606 472 540 496 452 496 C364 496 304 472 266 424 Z"
      fill="#101010"
    />
    {/* waterline catching the last of the light */}
    <path d="M266 424 L638 424 v5 H266 Z" fill="#181818" />

    {/* sea */}
    <g stroke="#0c0c0c" strokeLinecap="round" fill="none">
      <path d="M120 512 h180" strokeWidth="3" />
      <path d="M600 512 h190" strokeWidth="3" />
      <path d="M210 546 h250" strokeWidth="2.5" />
      <path d="M520 546 h190" strokeWidth="2.5" />
      <path d="M300 578 h300" strokeWidth="2" />
    </g>
  </svg>
);

export default Sailboat;
