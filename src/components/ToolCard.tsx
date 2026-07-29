import Link from 'next/link';

interface ToolCardProps {
  href: string;
  title: string;
  description: string;
  cta: string;
}

export default function ToolCard({ href, title, description, cta }: ToolCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-2xl border border-gray-200 p-6 text-left transition-colors hover:border-emerald-600 hover:bg-emerald-50/40"
    >
      <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
      <p className="mt-2 flex-1 text-sm text-gray-600">{description}</p>
      <span className="mt-4 text-sm font-medium text-emerald-700 group-hover:underline">
        {cta} →
      </span>
    </Link>
  );
}
