import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';

interface ToolCardProps {
  href: string;
  title: string;
  description: string;
  cta: string;
  icon: LucideIcon;
}

export default function ToolCard({ href, title, description, cta, icon: Icon }: ToolCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-3xl border border-gray-200 bg-white p-6 text-left shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-100">
        <Icon strokeWidth={2.5} className="h-5 w-5" />
      </div>
      <h2 className="mt-4 text-lg font-semibold text-gray-900">{title}</h2>
      <p className="mt-2 flex-1 text-sm text-gray-600">{description}</p>
      <span className="mt-4 text-sm font-medium text-emerald-700 group-hover:underline">{cta} →</span>
    </Link>
  );
}
