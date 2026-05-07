import { TimelineItem } from "@/data/resume";

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200 sm:left-8" />
      <div className="space-y-10">
        {items.map((item, i) => (
          <div key={i} className="relative pl-12 sm:pl-20">
            <div className="absolute left-2.5 top-1 h-3 w-3 rounded-full border-2 border-brand-600 bg-white sm:left-6.5" />
            <p className="text-xs font-medium text-brand-600">{item.period}</p>
            <h3 className="mt-1 text-base font-semibold text-gray-900">
              {item.title}
            </h3>
            <p className="text-sm text-gray-500">{item.company}</p>
            <p className="mt-2 text-sm text-gray-600">{item.description}</p>
            <ul className="mt-2 space-y-1">
              {item.highlights.map((h, j) => (
                <li key={j} className="flex gap-2 text-sm text-gray-600">
                  <span className="text-brand-500 shrink-0">•</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
