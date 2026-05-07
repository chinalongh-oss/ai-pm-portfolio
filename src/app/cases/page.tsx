import CaseCard from "@/components/CaseCard";
import { cases } from "@/data/cases";

export const metadata = {
  title: "案例 · 龙慧",
  description: "AI 产品经理项目案例集",
};

export default function CasesPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">
        项目案例
      </h1>
      <p className="mt-2 text-gray-600">
        聚焦 AI 工作流、AIGC 和搜索推荐等核心领域
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cases.map((c) => (
          <CaseCard key={c.slug} caseItem={c} />
        ))}
      </div>
    </div>
  );
}
