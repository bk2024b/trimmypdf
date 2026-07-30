export default function CompressIllustration() {
  return (
    <svg
      viewBox="0 0 420 200"
      className="mx-auto h-auto w-full max-w-md"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Large document (before) */}
      <rect x="20" y="20" width="120" height="160" rx="16" fill="#059669" />
      <path d="M104 20 L140 56 L104 56 Z" fill="#047857" />

      {/* Dashed arrow — echoes the logo's cut-line */}
      <line
        x1="160"
        y1="100"
        x2="248"
        y2="100"
        stroke="#F59E0B"
        strokeWidth="4"
        strokeDasharray="10 8"
        strokeLinecap="round"
        className="origin-left animate-pulse"
      />
      <path
        d="M242 88 L262 100 L242 112"
        stroke="#F59E0B"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Small document (after) */}
      <rect x="290" y="60" width="70" height="90" rx="10" fill="#059669" />
      <path d="M340 60 L360 80 L340 80 Z" fill="#047857" />

      {/* -90% badge */}
      <rect x="176" y="140" width="76" height="30" rx="15" fill="#FEF3C7" />
      <text
        x="214"
        y="160"
        textAnchor="middle"
        fontSize="14"
        fontWeight="700"
        fill="#B45309"
        fontFamily="inherit"
      >
        -90%
      </text>
    </svg>
  );
}
