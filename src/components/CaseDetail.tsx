import Link from "next/link";
import { CaseStudy } from "@/data/cases";

export default function CaseDetail({ caseItem }: { caseItem: CaseStudy }) {
  return (
    <article className="mx-auto max-w-3xl">
      <Link
        href="/cases"
        className="inline-flex items-center text-sm text-gray-500 hover:text-brand-600 transition-colors mb-8"
      >
        ← 返回案例列表
      </Link>

      <div className="flex items-center gap-2">
        <span className="inline-flex items-center rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-medium text-brand-700">
          {caseItem.category}
        </span>
        {caseItem.duration && <span className="text-xs text-gray-400">{caseItem.duration}</span>}
        {caseItem.role && (
          <>
            <span className="text-xs text-gray-400">·</span>
            <span className="text-xs text-gray-400">{caseItem.role}</span>
          </>
        )}
      </div>

      <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {caseItem.title}
      </h1>
      <p className="mt-2 text-lg text-gray-500">{caseItem.subtitle}</p>

      {caseItem.metrics.length > 0 && (
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {caseItem.metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-center"
            >
              <p className="text-2xl font-bold text-brand-600">{m.value}</p>
              <p className="mt-1 text-xs text-gray-500">{m.label}</p>
            </div>
          ))}
        </div>
      )}

      {caseItem.problem && (
        <section className="mt-10">
          <h2 className="text-lg font-semibold text-gray-900">问题背景</h2>
          <p className="mt-3 text-gray-600 leading-relaxed">{caseItem.problem}</p>
        </section>
      )}

      <section className="mt-10">
        <h2 className="text-lg font-semibold text-gray-900">解决思路</h2>
        <p className="mt-3 text-gray-600 leading-relaxed">
          {caseItem.approach}
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-semibold text-gray-900">核心方案</h2>
        <ul className="mt-3 space-y-3">
          {caseItem.solution.map((s, i) => (
            <li key={i} className="flex gap-3 text-gray-600 leading-relaxed">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-medium text-brand-700">
                {i + 1}
              </span>
              {s}
            </li>
          ))}
        </ul>
      </section>

      {caseItem.results.length > 0 && (
        <section className="mt-10">
          <h2 className="text-lg font-semibold text-gray-900">业务成果</h2>
          <ul className="mt-3 space-y-2">
            {caseItem.results.map((r, i) => (
              <li key={i} className="flex gap-2 text-gray-600">
                <span className="text-brand-500">✓</span>
                {r}
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="mt-10">
        <h2 className="text-lg font-semibold text-gray-900">技术栈</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {caseItem.tools.map((tool) => (
            <span
              key={tool}
              className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
            >
              {tool}
            </span>
          ))}
        </div>
      </section>
    </article>
  );
}
