import { MonitorCheck, Lock, UserX, Sparkles } from 'lucide-react';

const BADGES = [
  { icon: MonitorCheck, label: '100% browser-based' },
  { icon: Lock, label: 'Files never leave your device' },
  { icon: UserX, label: 'No account required' },
  { icon: Sparkles, label: 'Free forever' },
];

export default function TrustBadges() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {BADGES.map(({ icon: Icon, label }) => (
        <span
          key={label}
          className="flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-600 shadow-sm"
        >
          <Icon strokeWidth={2.5} className="h-3.5 w-3.5 text-emerald-600" />
          {label}
        </span>
      ))}
    </div>
  );
}
