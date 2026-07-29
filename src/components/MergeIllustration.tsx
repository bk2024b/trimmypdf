export default function MergeIllustration() {
  return (
    <svg
      viewBox="0 0 420 200"
      className="mx-auto h-auto w-full max-w-md"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Two small documents (before) */}
      <rect x="20" y="30" width="70" height="90" rx="10" fill="#059669" opacity="0.55" />
      <path d="M70 30 L90 50 L70 50 Z" fill="#047857" opacity="0.55" />

      <rect x="20" y="90" width="70" height="90" rx="10" fill="#059669" />
      <path d="M70 90 L90 110 L70 110 Z" fill="#047857" />

      {/* Dashed arrow — echoes the logo's cut-line */}
      <line
        x1="120"
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

      {/* One combined document (after) */}
      <rect x="290" y="20" width="120" height="160" rx="16" fill="#059669" />
      <path d="M374 20 L410 56 L374 56 Z" fill="#047857" />

      {/* Files badge */}
      <rect x="152" y="140" width="84" height="30" rx="15" fill="#FEF3C7" />
      <text
        x="194"
        y="160"
        textAnchor="middle"
        fontSize="13"
        fontWeight="700"
        fill="#B45309"
        fontFamily="inherit"
      >
        1 FILE
      </text>
    </svg>
  );
}
