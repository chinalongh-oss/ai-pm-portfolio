import Link from "next/link";
import { CaseStudy } from "@/data/cases";

export default function CaseCard({ caseItem }: { caseItem: CaseStudy }) {
  return (
    <Link href={`/cases/${caseItem.slug}`} className="group block">
      <div className="rounded-lg border border-gray-200 bg-white p-6 transition-shadow hover:shadow-md">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-medium text-brand-700">
            {caseItem.category}
          </span>
          <span className="text-xs text-gray-400">{caseItem.duration}</span>
        </div>
        <h3 className="mt-3 text-lg font-semibold text-gray-900 group-hover:text-brand-600 transition-colors">
          {caseItem.title}
        </h3>
        <p className="mt-1 text-sm text-gray-500">{caseItem.subtitle}</p>
        <p className="mt-3 text-sm leading-relaxed text-gray-600 line-clamp-2">
          {caseItem.summary}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {caseItem.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
